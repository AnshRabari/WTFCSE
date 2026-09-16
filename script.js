function checkLoanEligibility(){
    let age=Number(document.getElementById("age").value);
    let salary=Number(document.getElementById("salary").value)

    if (age>=18 && age<=58 && salary>=40000)
    {
        document.getElementById("ele").innerHTML="Elegible for loan.";
    }
    else
    {
                document.getElementById("ele").innerHTML="Not Elegible for loan.";
    }
    
}


function simpleInterest(P,R,T){
    return(P*R*T)/100;
}
function CalculateSI(){
    
        let P=Number(document.getElementById("Principle Amount").value);
        let R=Number(document.getElementById("Rate").value);
        let T=Number(document.getElementById("Time").value);
        let SI=simpleInterest(P,R,T);
        document.getElementById("siResult").innerHTML="Simple Interest="+SI;
   
    
}

// AI generated 
function CalculateEMI() {
   
    const principal = (document.getElementById('loanAmount').value);
    const annualRate = (document.getElementById('InterestRate').value);
    const years = (document.getElementById('Years').value);
    const resultElement = document.getElementById('EMIResult');

    
    if (isNaN(principal) || isNaN(annualRate) || isNaN(years) || principal <= 0 || years <= 0) {
        resultElement.innerText = "Please enter valid numbers.";
        return;
    }

   
    const monthlyRate = (annualRate / 12) / 100; 
    const totalMonths = years * 12;

    
    let emi;
    if (monthlyRate === 0) {
        emi = principal / totalMonths; // Interest-free calculation
    } else {
        emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / 
              (Math.pow(1 + monthlyRate, totalMonths) - 1);
    }

    
    resultElement.innerText = "Your Monthly EMI is: " + emi.toFixed(2);
}




function DisplayAccountType(){
    let AccountType = document.getElementById("AccountType").value;
    let AccountTypeResult = "";

    switch(AccountType){
        case "Savings":
            document.getElementById("AccountTypeResult").innerHTML="You Have Selected Saving Account.";
            break;
            case "Current":
            document.getElementById("AccountTypeResult").innerHTML="You Have Selected Current Account.";
            break;
            case "Fixed Deposit":
            document.getElementById("AccountTypeResult").innerHTML="You Have Selected Fixed Deposit Account.";
            break;
            default:
                document.getElementById("AccountTypeResult").innerHTML ="Please Select an Account Type";
    }
}

function GenerateInterestTable(){
    let output="Year\tInterest\n";
    for(let i=1;i<=10;i++)
    {
        output += i+"\t"+(10000*0.05*i)+"\n";
}
document.getElementById("tableResult").textContent=
output;
}

