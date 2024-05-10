export const getMonthNameWithId=(monthId)=>{
    let monthName="";
    if(monthId==1){
        monthName="January";
    }else if(monthId==2){
        monthName="February";
    }else if(monthId==3){
        monthName='March';
    }else if(monthId==4){
        monthName="April";
    }else if(monthId==5){
        monthName="May";
    }else if(monthId==6){
        monthName="June";
    }else if(monthId==7){
        monthName="July";
    }else if(monthId==8){
        monthName="August";
    }else if(monthId==9){
        monthName="September";
    }else if(monthId==10){
        monthName="October";
    }else if(monthId==11){
        monthName="November";
    }else if(monthId==12){
        monthName="December";
    }

    return monthName;
}