#include <stdio.h>
#include <string.h>

int main(void) {
  char f[100], s[100];
  fgets(f,100,stdin); 
  fgets(s,100,stdin);
  char ans[100];
  int maxlen = 0,count = 0, t = 0;
  for(int i=0;i<strlen(f)-1;i++){
    for(int j=0;j<strlen(s)-1;j++){
      if(f[i]==s[j]){
        for(int k=0;k<strlen(f)-i-1;k++){
          if(f[i+k]==s[j+k]){
            count++;
          } else break;
        }
      }
      if(count>maxlen){
        for(int k=0;k<count;k++){
          ans[t] = f[i+k];
          t++;
        }
        maxlen = count;
      }
      t-=t; count-=count;
    }
  }
  printf("%s",ans);
  return 0;
}

//AAAACTGCTACCGGT
//CTGAATCTACTGCTATTGCAA