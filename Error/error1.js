/**
 * Created by techmaster on 2/15/15.
 */
try {
    console.log('About to throw an error');
    throw new Error('Error throw');
}

catch(e) {
    console.log('I will only execute if an error is thrown');
}
finally {
    console.log('I will execute irrespective of an error thrown');
}