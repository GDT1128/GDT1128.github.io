from django.contrib import admin
from .models import EndUser,InsurancePolicy,StockHolding,Transaction
# Register your models here.
admin.site.register(EndUser)
admin.site.register(InsurancePolicy)
admin.site.register(StockHolding)
admin.site.register(Transaction)