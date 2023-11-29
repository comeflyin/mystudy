var decodeString = function (s) {
    const [self,times,str]  = s.match(/(\d*)\[([^\[\]]*)\]/)||[]
    console.log(self,times,str);
   //return self?decodeString(s.replace(self,Array(times*1).fill(str).join(''))):s
}

let s = "3[a]2[bc]"
decodeString(s)