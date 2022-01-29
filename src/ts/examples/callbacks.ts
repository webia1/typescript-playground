function firstFunction(_arg0: (x: any) => void) {}
function secondFunction(_x: any, _arg1: (y: any) => void) {}
function thirdFunction(_y: any, _arg1: (z: any) => void) {}

firstFunction((x: any) => {
  secondFunction(x, (y: any) => {
    thirdFunction(y, (z: any) => {
      console.log('Z: ', z);
    });
  });
});
