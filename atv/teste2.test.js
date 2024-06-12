import {
    assertStringincludes
} from  "https://deno.land/std@0.224.0/testing/asserts.ts"

let a = "BEM SUCEDIDO";



Deno.test("ESTE TESTE FOI" , ()=>{
    assertStringincludes(a, "BEM SUCEDIDO")
   

})

