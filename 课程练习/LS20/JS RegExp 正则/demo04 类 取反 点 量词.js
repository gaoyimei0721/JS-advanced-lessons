//字符类 []
console.log("absxsdfe123Ab".replace(/[abd]/,"X"));   //Xbsxsdfe123Ab
console.log("absxsdfe123Ab".replace(/[abd]/g,"X"));  //XXsxsXfe123AX
console.log("absxsdfe123Ab".replace(/[abd]/gi,"X")); //XXsxsXfe123XX

// 字符类 的取反 [^]
console.log("absxsdfe123Ab".replace(/[^abd]/,"X"));   //abXxsdfe123Ab
console.log("absxsdfe123Ab".replace(/[^abd]/g,"X"));  //abXXXdXXXXXXb
console.log("absxsdfe123Ab".replace(/[^abd]/gi,"X")); //abXXXdXXXXXAb

//范围类
console.log("12345667".replace(/[3-9]/gi,"X"));                  //12XXXXXX
console.log("absxsdfe123Ab".replace(/[a-f1-9]/gi,"X"));          //XXsxsXXXXXXXX
console.log("absxsdfe123Ab".replace(/[a-f][1-9]/gi,"X"));        //absxsdfX23Ab
console.log("absxsdfe1Q2e3Ab".replace(/[a-f][1-9][A-Z]/gi,"X")); //absxsdfX2Xb

// \d、\D、\w、\W、\s、\S 用[]如何表示
// [0-9]
// [^0-9]
// [a-zA-Z_0-9]
// [^a-zA-Z_0-9]
// [\t\n\x0B\f\r]
// [^\t\n\x0B\f\r]

//关于 . 除了回车和换行符之外的所有字符
/ab[0-9][^\r\n]/ //等效于/[ab\d.]/
console.log("@abc@123@".replace(/@./g,"Q"));
console.log("@abc@123@".replace(/.@/g,"Q"));

//关于边界 ^ $ \b \B
console.log("This is a Boy is".replace(/is/g,0));
console.log("This is a Boy is".replace(/^is/g,0));
console.log("This is a Boy is".replace(/is$/g,0));
console.log("This is a Boy is".replace(/is\b/g,0));
console.log("This is a Boy is".replace(/is\B/g,0));
console.log("This is a Boy is".replace(/\bis/g,0));
console.log("This is a Boy is".replace(/\Bis/g,0));


//量词 注意*在这里是量词，不是充当通配符，充当通配符的是 .
//? 出现0次或1次（最多出现1次）
console.log("AaBbAb_AaaBbbAba".replace(/Aa?/g,0)); //?影响的是a,所以能匹配到 A Aa 
//0Bb0b_0aBbb0ba

//+ 出现1次或多次（至少出现1次）
console.log("AaBbAb_AaaBbbAba".replace(/Aa+/g,0)); //能匹配到 Aa Aaa
//0BbAb_0BbbAba

//* 出现0次或多次（任意次）
console.log("AaBbAb_AaaBbbAba".replace(/Aa*/g,0)); //匹配到 A Aa Aaa
//0Bb0b_0Bbb0ba

//{n} 出现n次
console.log("AaBbAb_AaaBbbAba".replace(/Aa{1}/g,0));
console.log("AaBbAb_AaaBbbAba".replace(/Aa{2}/g,0));

//{n,m} 出现n到m次
console.log("AaBbAb_AaaBbbAba".replace(/Aa{1,2}/g,0));

//{n,} 出现至少n次
console.log("AaBbAb_AaaBbbAbaAaaaaaaAaaAaaa".replace(/Aa{2,}/g,0));
//console.log("AaBbAb_AaaBbbAbaAaaaaaaAaaAaaa".replace(/Aa{2,4}/g,0));

//注意：0到n次的写法{0,n}而不是{,n}

