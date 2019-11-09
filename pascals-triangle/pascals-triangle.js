//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
function pascals(n){
		var ans = [];
		if (n==1){ans[0] = [1];return ans}
		else if (n==2){ans[0] = [1];ans[1] = [1,1];return ans}
	else {
		ans[0] = [1];
		ans[1] = [1,1];
		for (var i = 2; i < n;i++){
			ans[i]=[1];
			for (var j = 1; j <= i-1; j++){
				ans[i][j] = ans[i-1][j] + ans[i-1][j-1];
				
			}
			ans[i][j]=1;
		}
	return ans;
}
}
export class Triangle {
  constructor(n) {
	this.n = n;
  }
  
  get lastRow() {
    return this.rows[this.rows.length-1]
  }

  get rows() {
    this.ans = pascals(this.n)
	return this.ans
  }
}
