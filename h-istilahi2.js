
  // fungsi untuk menghitung nilai 
 const calculate2 = () => { 
  // ketika seseorang memasukan tahun dan hasilnya akan diproses. 
  let tahun = document.querySelector("#tahun").value; 
  // mengambil inputan tahun. */ 
  let totaltahun = parseFloat(tahun) 
 	// sisa pembagian tahun
 	let hasil = totaltahun % 8;
  // total tahun dikalikan 10 terlebih dahulu tapi tidak ditampilkan di halaman
  let thn = (totaltahun % 8) *10; 
  // tahun tersebut termasuk tahun apa?
  if (thn <= 89 && thn >= 79) { 
  	grades = "Baa"; 
  } else if (thn <= 79 && thn >= 69) { 
 	grades = "Dal"; 
  } else if (thn <= 69 && thn >= 59) { 
  	grades = "Zai"; 
  } else if (thn <= 59 && thn >= 49) { 
 	grades = "Jim"; 
  } else if (thn <= 49 && thn >= 39) { 
  	grades = "Haa"; 
  } else if (thn <= 39 && thn >= 29) { 
  	grades = "Alip"; 
  } else if (thn <= 29 && thn >= 19) { 
 	grades = "Jim"; 
  } else if (thn <= 19 && thn >= 9) { 
  	grades = "Wawu"; 	
   } else { 
  	grades = "Ba"; 
   } 
   // mengetahui masuknya hari
   let tahuntam = totaltahun -1;
   //fungsi int
   let b = tahuntam / 30;
   let bB = Math.trunc(b);
   // kali10 agar menjadi angka puluhan&ratusan
   let cC = tahuntam % 30;
   // munculkan hasil kabisah (di ambil dari nilai C)
   if (cC <= 0) {          
  	gradeskabisah = "11"; 
   } else if (cC <= 1) {   
 	gradeskabisah = "0"; 	
  } else if (cC <= 2) {    
 	gradeskabisah = "1"; 
  } else if (cC <= 3) {    
 	gradeskabisah = "1"; 
  } else if (cC <= 4) {   
 	gradeskabisah = "1"; 
  } else if (cC <= 5) {   
 	gradeskabisah = "2"; 
  } else if (cC <= 6) {   
 	gradeskabisah = "2"; 
  } else if (cC <= 7) {   
 	gradeskabisah = "3"; 
  } else if (cC <= 8) {   
 	gradeskabisah = "3"; 
  } else if (cC <= 9) {   
 	gradeskabisah = "3"; 
  } else if (cC <= 10) {   
 	gradeskabisah = "4"; 
  } else if (cC <= 11) {   
 	gradeskabisah = "4"; 
  } else if (cC <= 12) {    
 	gradeskabisah = "4"; 
  } else if (cC <= 13) {    
 	gradeskabisah = "5"; 
  } else if (cC <= 14) {   
 	gradeskabisah = "5"; 
  } else if (cC <= 15) {   
 	gradeskabisah = "5"; 
  } else if (cC <= 16) {   
 	gradeskabisah = "6"; 
  } else if (cC <= 17) {   
 	gradeskabisah = "6"; 
  } else if (cC <= 18) {   
 	gradeskabisah = "7"; 
  } else if (cC <= 19) {   
 	gradeskabisah = "7"; 
  } else if (cC <= 20) {   
 	gradeskabisah = "7"; 
  } else if (cC <= 21) {   
 	gradeskabisah = "8"; 
  } else if (cC <= 22) {    
 	gradeskabisah = "8"; 
  } else if (cC <= 23) {    
 	gradeskabisah = "8"; 
  } else if (cC <= 24) {   
 	gradeskabisah = "9"; 
  } else if (cC <= 25) {   
 	gradeskabisah = "9"; 
  } else if (cC <= 26) {   
 	gradeskabisah = "10"; 
  } else if (cC <= 27) {   
 	gradeskabisah = "10"; 
  } else if (cC <= 28) {   
 	gradeskabisah = "10"; 
  } else if (cC <= 29) {   
 	gradeskabisah = "11"; 
  } else if (cC <= 30) {   
 	gradeskabisah = "11"; 
  } 
  // munculkan hasil basitoh (di ambil dari nilai C)
   if (cC <= 0) {          
  	gradesbasitoh = "19"; 
   } else if (cC <= 1) {   
 	gradesbasitoh = "1"; 	
  } else if (cC <= 2) {    
 	gradesbasitoh = "1"; 
  } else if (cC <= 3) {    
 	gradesbasitoh = "2"; 
  } else if (cC <= 4) {   
 	gradesbasitoh = "3"; 
  } else if (cC <= 5) {   
 	gradesbasitoh = "3"; 
  } else if (cC <= 6) {   
 	gradesbasitoh = "4"; 
  } else if (cC <= 7) {   
 	gradesbasitoh = "4"; 
  } else if (cC <= 8) {   
 	gradesbasitoh = "5"; 
  } else if (cC <= 9) {   
 	gradesbasitoh = "6"; 
  } else if (cC <= 10) {   
 	gradesbasitoh = "6"; 
  } else if (cC <= 11) {   
 	gradesbasitoh = "7"; 
  } else if (cC <= 12) {    
 	gradesbasitoh = "8"; 
  } else if (cC <= 13) {    
 	gradesbasitoh = "8"; 
  } else if (cC <= 14) {   
 	gradesbasitoh = "9"; 
  } else if (cC <= 15) {   
 	gradesbasitoh = "10"; 
  } else if (cC <= 16) {   
 	gradesbasitoh = "10"; 
  } else if (cC <= 17) {   
 	gradesbasitoh = "11"; 
  } else if (cC <= 18) {   
 	gradesbasitoh = "11"; 
  } else if (cC <= 19) {   
 	gradesbasitoh = "12"; 
  } else if (cC <= 20) {   
 	gradesbasitoh = "13"; 
  } else if (cC <= 21) {   
 	gradesbasitoh = "13"; 
  } else if (cC <= 22) {    
 	gradesbasitoh = "14"; 
  } else if (cC <= 23) {    
 	gradesbasitoh = "15"; 
  } else if (cC <= 24) {   
 	gradesbasitoh = "15"; 
  } else if (cC <= 25) {   
 	gradesbasitoh = "16"; 
  } else if (cC <= 26) {   
 	gradesbasitoh = "16"; 
  } else if (cC <= 27) {   
 	gradesbasitoh = "17"; 
  } else if (cC <= 28) {   
 	gradesbasitoh = "18"; 
  } else if (cC <= 29) {   
 	gradesbasitoh = "18"; 
  } else if (cC <= 30) {   
 	gradesbasitoh = "19"; 
  } 
   // 
  let dD = bB * 5;  
  let eE = gradeskabisah * 5; 
  let fF = gradesbasitoh * 4; 
  let gG = dD + eE + fF + 5; 
  let hH = gG % 7;
   // Masuk tahun jatuh pada hari apa?
   // Munculkan hasil hitungan hari dari H
  if (hH <= 0) {          
  	hmth = "Sabtu"; 
   } else if (hH <= 1) {   
 	hmth = "Minggu"; 	
  } else if (hH <= 2) {    
 	hmth = "Senin"; 
  } else if (hH <= 3) {    
 	hmth = "Selasa"; 
  } else if (hH <= 4) {   
 	hmth = "Rabu"; 
  } else if (hH <= 5) {   
 	hmth = "Kamis"; 
  } else if (hH <= 6) {   
 	hmth = "Jum'at"; 
  } else if (hH <= 7) {   
 	hmth = "Sabtu"; 
  } 
   // Hari pasaran ahli jawa
   // Masukan Hasil hari jawa 'di ambil dari nilai B & F'
   let iI = bB + fF;
   let jJ = iI % 5;
   // Hasilnya masuk pada pasaran apa?
   if (jJ <= 0) {          
  	hmp = "Kliwon"; 
   } else if (jJ <= 1) {   
 	hmp = "Legi"; 	
  } else if (jJ <= 2) {    
 	hmp = "Pahing"; 
  } else if (jJ <= 3) {    
 	hmp = "Pon"; 
  } else if (jJ <= 4) {   
 	hmp = "Wage"; 
  } else if (jJ <= 5) {   
 	hmp = "Kliwon"; 
  } 
   // Mengetahui apakah tahun tersebut termasuk kabisah atau basitoh???!
   let kK = totaltahun % 30;
   if (kK <= 0) {          
  	kbbs = "Basitoh"; 
   } else if (kK <= 1) {   
 	kbbs = "Basitoh"; 	
  } else if (kK <= 2) {    
 	kbbs = "Kabisah"; 
  } else if (kK <= 3) {    
 	kbbs = "Basitoh"; 
  } else if (kK <= 4) {   
 	kbbs = "Basitoh"; 
  } else if (kK <= 5) {   
 	kbbs = "Kabisah"; 
  } else if (kK <= 6) {   
 	kbbs = "Basitoh"; 	
  } else if (kK <= 7) {    
 	kbbs = "Kabisah"; 
  } else if (kK <= 8) {    
 	kbbs = "Basitoh"; 
  } else if (kK <= 9) {   
 	kbbs = "Basitoh"; 
  } else if (kK <= 10) {   
 	kbbs = "Kabisah"; 
  } else if (kK <= 11) {   
 	kbbs = "Basitoh"; 	
  } else if (kK <= 12) {    
 	kbbs = "Basitoh"; 
  } else if (kK <= 13) {    
 	kbbs = "Kabisah"; 
  } else if (kK <= 14) {   
 	kbbs = "Basitoh"; 
  } else if (kK <= 15) {   
 	kbbs = "Kabisah"; 
  } else if (kK <= 16) {   
 	kbbs = "Basitoh"; 	
  } else if (kK <= 17) {    
 	kbbs = "Basitoh"; 
  } else if (kK <= 18) {    
 	kbbs = "Kabisah"; 
  } else if (kK <= 19) {   
 	kbbs = "Basitoh"; 
  } else if (kK <= 20) {   
 	kbbs = "Basitoh"; 
  } else if (kK <= 21) {   
 	kbbs = "Kabisah"; 
  } else if (kK <= 22) {   
 	kbbs = "Basitoh"; 	
  } else if (kK <= 23) {    
 	kbbs = "Basitoh"; 
  } else if (kK <= 24) {    
 	kbbs = "Kabisah"; 
  } else if (kK <= 25) {   
 	kbbs = "Basitoh"; 
  } else if (kK <= 26) {   
 	kbbs = "Kabisah"; 
  } else if (kK <= 27) {   
 	kbbs = "Basitoh"; 	
  } else if (kK <= 28) {    
 	kbbs = "Basitoh"; 
  } else if (kK <= 29) {    
 	kbbs = "Kabisah"; 
  } else if (kK <= 30) {   
 	kbbs = "Basitoh"; 
  } 
   
   // check apakah sudah memasukan inputan tahun atau belum?
   // jika belum, maka "Harap masukan tahun"
  if (tahun == "") { 
  	document.querySelector("#showdata").innerHTML 
 		= "Mohon maaf, harap masukan tahun !"; 
   } 
	// jika sudah, keluarkan hasil
  	 else { 
  	document.querySelector( 
  		"#showdata"
  	).innerHTML = 
 		` 
 		<table>
 		
 		<tr>
 		  <td>Tahun</td>
        <td><pre> :<pre></td>
          <td> ${totaltahun} </td>
 	         	</tr>
 		
 		<tr>
 		   <td>A</td>
         <td><pre> :<pre></td>
           <td> ${hasil} </td>
 	           </tr>
 		
 		<tr>
 		    <td> Tahun jawa </td>
          <td><pre> :<pre></td>
            <td> ${grades} </td>
 	          	</tr>
 		<tr>
 		   <td> Tahun Tam </td>
         <td><pre> :<pre></td>
           <td> ${tahuntam} </td>
 	           </tr>
 		
 		<tr>
 		    <td> B </td>
          <td><pre> :<pre></td>
            <td> ${bB} </td>
 	          	</tr>
 	   <tr>
 		    <td> C </td>
          <td><pre> :<pre></td>
            <td> ${cC} </td>
 	          	</tr>       	
 	     
 	     <tr>
 		    <td> Kabisah </td>
          <td><pre> :<pre></td>
            <td> ${gradeskabisah} </td>
 	          	</tr> 
 	          	
 	     <tr>
 		    <td> Basitoh </td>
          <td><pre> :<pre></td>
            <td>${gradesbasitoh}  </td>
 	          	</tr> 
 	        
 	        <tr>
 		       <td> D </td>
              <td><pre> :<pre></td>
                <td> ${dD} </td>
 	              	</tr>
 	        
 	         <tr>
 		        <td> E </td>
              <td><pre> :<pre></td>
                <td> ${eE} </td>
 	              	</tr>
 	        
 	        <tr>
 		       <td> F </td>
              <td><pre> :<pre></td>
                <td> ${fF} </td>
 	              	</tr>
 	        
 	        <tr>
 		       <td> G </td>
              <td><pre> :<pre></td>
                <td> ${gG} </td>
 	              	</tr>
 	        
 	        <tr>
 		       <td> H </td>
              <td><pre> :<pre></td>
                <td> ${hH} </td>
 	              	</tr>
 	        
 	         <tr>
 		         <td> Hari </td>
               <td><pre> :<pre></td>
                 <td> ${hmth} </td>
 	               	 </tr>
 	               	 
 	         <tr>
 		         <td> I </td>
               <td><pre> :<pre></td>
                 <td> ${iI} </td>
 	               	 </tr>
 	               	 
 	         <tr>
 		         <td> j </td>
               <td><pre> :<pre></td>
                 <td> ${jJ} </td>
 	               	 </tr> 	 
 	               	 
 	          <tr>
 		         <td> Pasaran </td>
               <td><pre> :<pre></td>
                 <td> ${hmp} </td>
 	               	 </tr>     	 
 	          	
 	          	<tr>
 		         <td> K </td>
               <td><pre> :<pre></td>
                 <td> ${kK} </td>
 	               	 </tr> 
 	          	
 	          		<tr>
 		         <td> kbbs </td>
               <td><pre> :<pre></td>
                 <td> ${kbbs} </td>
 	               	 </tr> 
 	               	 
 	         	</table>
 		
 		<h1 style="margin-top:20px"> Al-Hasil </h1>
 		       <tr>
 		         <td> Awal Tahun ${totaltahun} Hijriyah jatuh Pada Hari
               <pre>${hmth} , ${hmp}</td>
 	               	 </tr> 
	  `; 
 	} 
  }; 
  