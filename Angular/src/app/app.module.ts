import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth.guard';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

// Import all components from components directory
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageAccountComponent } from './components/manage-account/manage-account.component';
import { SearchAccountComponent } from './components/search-account/search-account.component';
import { ViewTransactionComponent } from './components/view-transaction/view-transaction.component';
import { ViewBalanceComponent } from './components/view-balance/view-balance.component';
import { DepositMoneyComponent } from './components/deposit-money/deposit-money.component';
import { WithdrawMoneyComponent } from './components/withdraw-money/withdraw-money.component';
import { SignupComponent } from './signup/signup.component';
import { TokenInterceptor } from './token.interceptor';
// import { RouterModule } from '@angular/router';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';
import { StatementComponent } from './statement/statement.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { AddBeneficiaryComponent } from './add-beneficiary/add-beneficiary.component';
import { PendingRequestComponent } from './pending-request/pending-request.component';
import { CustomerComponent } from './customer/customer.component';
import { AccountComponent } from './account/account.component';
import { EmployeeComponent } from './employee/employee.component';
// import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    SignupComponent,
    SidebarComponent,
    DashboardComponent,
    //  HomeComponent,
    ManageAccountComponent,
    SearchAccountComponent,
    ViewTransactionComponent,
    ViewBalanceComponent,
    DepositMoneyComponent,
    WithdrawMoneyComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    EmiCalculatorComponent,
    StatementComponent,
    UpdateProfileComponent,
    CreateAccountComponent,
    FundTransferComponent,
    ApplyLoanComponent,
    AddBeneficiaryComponent,
    PendingRequestComponent,
    CustomerComponent,
    AccountComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
     RouterModule 
  ],
  providers: [AuthService, AuthGuard,{
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }