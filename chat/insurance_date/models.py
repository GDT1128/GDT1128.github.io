from django.db import models

# Create your models here.

#使用者
class EndUser(models.Model):
    name = models.TextField(max_length=100)
    email = models.EmailField()

# 覆寫_str_
    def __str__(self):
        return self.name
#保險單
class InsurancePolicy(models.Model):
    user = models.ForeignKey(EndUser, on_delete=models.CASCADE)
    policy_name = models.TextField(max_length=50, unique=True) #保單名稱
    start_date = models.DateField() #購買日期
    end_date = models.DateField() #結束日期
    policy_number = models.TextField #保險費用
    policy_message = models.TextField(max_length=100)

    def __str__(self):
        return self.policy_name

#持有股票
class StockHolding(models.Model):
    user = models.ForeignKey(EndUser, on_delete=models.CASCADE)
    stock_symbol = models.TextField(max_length=10) #股票代碼
    purchase_date = models.DateField() #購買日期
    purchase_price = models.DecimalField(max_digits=10, decimal_places=2) #股票金額
    quantity = models.PositiveIntegerField() #數量

    
    def __str__(self):
        return self.stock_symbol

#交易紀錄
class Transaction(models.Model):
    holding = models.ForeignKey(StockHolding, on_delete=models.CASCADE) #股票持有
    date = models.DateField() #持有時間
    amount = models.DecimalField(max_digits=10, decimal_places=2) #持有金額
    
    
    def __str__(self):
        return self.holding