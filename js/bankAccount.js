var accountInfoList =[];
const makeAccount=function(){
    var accountName="";
    var balance=0;
    const createAccount=function (acctName,bal){
        this.accountName=acctName;
        this.balance=bal;
        return this;
    }
    return {
        createAccount: createAccount
    }
};

window.onload=function () {

    document.getElementById("add").onclick=
        function(){

            let balAccount=0;
            let acctNa=document.getElementById("t_acctName").value;
            balAccount=document.getElementById("t_balance").value;

            if(acctNa==""){
                alert("you have to enter an account name")
            }else{
                let acct1=makeAccount().createAccount(acctNa,balAccount);
                accountInfoList.push(acct1);
                accountInfoList.sort();
                document.getElementById("ta_list").value=""
                for(let ac of accountInfoList){
                    document.getElementById("ta_list").value+="Account name : "+ac.accountName+"  Balance : "+ac.balance+"\n";
                }
            }


        };
}