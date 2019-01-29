let marks = 30

if (marks >= 40) {
    console.log(`You are pass`)
    if(marks >= 90 ) {
        console.log(`You have achieved A grade`)
    }else if( (marks < 90) && (marks >=70) ) {
        console.log(`You have achieved B grade`)
    }else if( (marks < 70) && (marks >=50) ) {
        console.log(`You have achieved C grade`)
    }else {
        console.log(`You have achieved D grade`)
    } 
} else {
    console.log(`You are fail`)
}
