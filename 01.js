function grade(value) {
    if (value>=90){
        return 'A';
    } else if(value >=80 && value <=899) {
        return 'B';
    }else if(value >=70 && value <=79) {
        return 'B';
    }else if(value >=60 && value <=69) {
        return 'B';
    }else if(value <=59) {
        return 'B';
    }
}
