long long sum(int *a, int n) {
    int i=0;
	long long ans = 0;
    for(i=0; i<n; i++){
        ans+=a[i];
    }
	return ans;
}
