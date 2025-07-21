findLargest([10, 20, 5, 40, 30]);
// 40
findLargest([-5, -10, -1]);
// -1

function findLargest(arr) {
    // let temp=arr[0];
    // arr.forEach(element => {
    //     element>temp?temp=element:null;
    
    // });
    // console.log(temp)

    console.log(Math.max(...arr))
}