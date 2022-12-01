export function isPalindrome(str: string): boolean {
  const regex = /[^A-Za-z0-9]/g;
  const lowRegStr = str.toLowerCase().replace(regex, '');
  const reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;
}

export function reverse(): void {

}
