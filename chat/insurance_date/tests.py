from django.test import TestCase
from .models import EndUser, InsurancePolicy, StockHolding, Transaction

class ModelTestCase(TestCase):
    def setUp(self):
        """
        在每個測試用例執行前，創建一些測試資料
        """
        self.user = EndUser.objects.create(name="yuki", email="test@example.com")
        self.insurancedate = InsurancePolicy.objects.create(
            user=self.user,
            policy_name="測試保單",
            start_date="2023-11-24",
            end_date="2024-11-24",
            policy_number="12",  # Pass the policy_number argument here
            policy_message="這是一份測試保單"
        )
        self.stock = StockHolding.objects.create(
            user=self.user,
            stock_symbol="AAPL",
            purchase_date="2023-11-24",
            purchase_price=150.00,
            quantity=10
        )
        self.transaction = Transaction.objects.create(
            holding=self.stock,
            date="2023-11-25",
            amount=1500.00
        )
    def test_model_creation(self):
        """
        測試模型是否能成功創建
        """
        self.assertEqual(str(self.user), "yuki")
        self.assertEqual(str(self.insurancedate), "測試保單")
        self.assertEqual(str(self.stock), "AAPL")
        self.assertEqual(str(self.transaction), str(self.stock))
        
    def test_foreign_key_relationship(self):
        """
        測試外鍵關係是否正確
        """
        self.assertEqual(self.insurancedate.user, self.user)
        self.assertEqual(self.stock.user, self.user)
        self.assertEqual(self.transaction.holding, self.stock)

   