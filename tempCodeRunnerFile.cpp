#include <bits/stdc++.h>
using namespace std;
void solve() {
int n;
cin>>n;
int a[n];
for(int i=0;i<n;i++)
{
	cin>>a[i];
}
int l;
cin>>l;
string s;
for(int i=0;i<l;i++)
{
	
	cin>>s;
	if(s.size()!=n) 
	{
		cout<<"NO"<<endl;
		continue;
	}
	int f=1;
	map<char,int>x;
	map<int,char>y;
	for(int i=0;i<n;i++)
	{
	if(x.count(s[i]))
	{
		if(x[s[i]]!=a[i])
           f=0;
	}
	if(y.count(a[i]))
	{
		if(y[a[i]]!=s[i])
           f=0;
	}
	
	x[a[i]]=s[i];
	y[s[i]]=a[i];
}
if(f==0) cout<<"NO"<<endl;
else cout<<"YES"<<endl;
}
}


int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    long long t = 1;
    // cal();
    cin >> t;
    while (t--)
    { 
solve();
    }
    return 0;
}