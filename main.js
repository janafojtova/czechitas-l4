// tady je místo pro náš program
/*
Vlastnosti a metody

V konzoli prohlížeče si založte proměnnou title a uložte do ní název svého oblíbeného filmu (např. Pán prstenů). 
Proveďte následující úkoly.

Vypište do konzole počet znaků názvu.
Vypište název filmu převedený na velká písmena.
Vyřízněte z názvu prvních pět písmen.
Vyřízněte z názvu posledních pět písmen.*/
 let title = "Pán prstenů";
 let delkaRetezce = Number(title.length);
 let velkaPismena = title.toUpperCase();
 let prvnichPetPismen = title.slice(0,5)
 let poslednichPetPismen = title.slice(delkaRetezce-5,delkaRetezce)

/*2
E-maily

Vytvořte stránku, která bude pracovat s e-mailovými adresami ve formátu

jmeno.prijmeni@domena
Tedy například:

petr.novak@gmail.com
romana.nejedla@czechitas.cz
slavomir.ponuchalek@yahoo.com
Postupujte dle následujících kroků.

Vytvořte jednoduchou webovou stránku s JavaScriptovým programem.
Nechte uživatele zadat jeho e-mail a uložte si jej do proměnné email.
Pomocí metody indexOf najděte v tomto e-mailu pozici znaku zavináč. Tuto pozici si uložte do proměnné atIndex.
Pomocí metody slice vyřízněte z e-mailu první část představující jméno a příjmení uživatele.
Dále z e-mailu vyřízněte název domény tedy například gmail.com.
Ze získaných informací vytvořte objekt, který bude vypadat například takto:
const parsedEmail = {
	userName: 'slavomir.ponuchalek',
	domain: 'yahoo.com',
}
Pro kontrolu vypište tento objekt do stránky. Každou hodnotu vypište jako odstavec.*/
let email = prompt("Zadej email: ")
let atIndex = email.indexOf("@");
let jmenoAPrijmeni = email.slice(0,atIndex)
let domena = email.slice(atIndex+1,email.length)
const parsedEmail = {
	userName: jmenoAPrijmeni,
	domain: domena,
}
document.body.innerHTML =
'<p>Uživatelské jméno: ' + parsedEmail.userName + '</p>'+
'<p>Doména: ' + parsedEmail.domain + '</p>'
/*3
Doručování

Vytvořte webovou stránku, kde uživatel zadá svoji adresu například pro účely doručení objednaného zboží.
 Požaduje ulici, číslo domu, město a PSČ.

Uložte všechny údaje do vhodně pojmenovaných proměnných.
Ze zadanách údajů sestavte pomocí interpolace řetězeců obsahující HTML ve formátu jako níže
<address>
	<p>Pod Stájemi 67</p>
	<p>12754 Klysnov</p>
</address>
Pomocí document.body.innerHTML vložte sestavené HTML do stránky.*/

let ulice = prompt("Zadejte ulici: ");
let cisloDomu = prompt("Zadejte číslo domu: ");
let mesto = prompt("Zadejte město: ");
let psc = prompt("Zadejte psč: ");
document.body.innerHTML += 

'<p>'+ulice + " " + cisloDomu +'</p>'+
'<p>' +psc+ " " +mesto+'</p>'