/**
 * Created by techmaster on 2/18/15.
 */
process.nextTick(function () {
   console.log('It shows in next tick');
});
console.log('immediate');