const Function = () => {
  function addTwo(num: number): number {
    return num
  }
  //   function getValue(myVal: number):boolean {
  //     if (myVal > 5){
  // 		return true
  // 	}
  // 	return 'false'
  //   }

  const helloWorld = (s: string) => {
    return ""
  }

  //   const heros = ["thor", "spiderman", "ironman"]
  const heros = [1, 2, 3]

  function consoleError(errmsg: string): void {
    console.log(errmsg)
  }
  function handleError(errmsg: string): never {
    throw new Error(errmsg)
  }

  return (
    <>
      <div>
        {/* {heros.map((hero: number) => {
          return `hero is ${hero}`
        })} */}
        function
      </div>
    </>
  )
}

export default Function
