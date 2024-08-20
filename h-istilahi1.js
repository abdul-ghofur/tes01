
  // fungsi untuk menghitung nilai 
 const calculate1 = () => { 
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
 // menghitung masuknya bulan, hari nasional hari pasaran dan jumlah hari dalam sebulan di ambil dari hh dan jj
 // jadwal hmth dan hmp dari data hh dan jj
 let hhMuharom = (hH + 0) % 7;
 let hhSopar = (hH + 2) % 7;
 let hhRobiulAwal = (hH + 3) % 7;
 let hhRobiusStani = (hH + 5) % 7;
 let hhJumadilAwal = (hH + 6) % 7;
 let hhJumadisStani = (hH + 1) % 7;
 let hhRojab = (hH + 2) % 7;
 let hhSyaban = (hH + 4) % 7;
 let hhRomadhon = (hH + 5) % 7;
 let hhSyawal = (hH + 0) % 7;
 let hhDzulQodah = (hH + 1) % 7;
 let hhDzulHijjah = (hH + 3) % 7;
 
 if (hhSopar <= 0) {soparN = "Sabtu";}
 else if (hhSopar <= 1) {soparN = "Minggu";}
 else if (hhSopar <= 2) {soparN = "Senin";}
 else if (hhSopar <= 3) {soparN = "Selasa";}
 else if (hhSopar <= 4) {soparN = "Rabu";}
 else if (hhSopar <= 5) {soparN = "Kamis";}
 else if (hhSopar <= 6) {soparN = "Jumat";}
 else if (hhSopar <= 7) {soparN = "Sabtu";}
 
 if (hhRobiulAwal <= 0) {robiulAwalN = "Sabtu";}
 else if (hhRobiulAwal <= 1) {robiulAwalN = "Minggu";}
 else if (hhRobiulAwal <= 2) {robiulAwalN = "Senin";}
 else if (hhRobiulAwal <= 3) {robiulAwalN = "Selasa";}
 else if (hhRobiulAwal <= 4) {robiulAwalN = "Rabu";}
 else if (hhRobiulAwal <= 5) {robiulAwalN = "Kamis";}
 else if (hhRobiulAwal <= 6) {robiulAwalN = "Jumat";}
 else if (hhRobiulAwal <= 7) {robiulAwalN = "Sabtu";}
 
 if (hhRobiusStani <= 0) {robiusStaniN = "Sabtu";}
 else if (hhRobiusStani <= 1) {robiusStaniN = "Minggu";}
 else if (hhRobiusStani <= 2) {robiusStaniN = "Senin";}
 else if (hhRobiusStani <= 3) {robiusStaniN = "Selasa";}
 else if (hhRobiusStani <= 4) {robiusStaniN = "Rabu";}
 else if (hhRobiusStani <= 5) {robiusStaniN = "Kamis";}
 else if (hhRobiusStani <= 6) {robiusStaniN = "Jumat";}
 else if (hhRobiusStani <= 7) {robiusStaniN = "Sabtu";}
 
 if (hhJumadilAwal <= 0) {jumadilAwalN = "Sabtu";}
 else if (hhJumadilAwal <= 1) {jumadilAwalN = "Minggu";}
 else if (hhJumadilAwal <= 2) {jumadilAwalN = "Senin";}
 else if (hhJumadilAwal <= 3) {jumadilAwalN = "Selasa";}
 else if (hhJumadilAwal <= 4) {jumadilAwalN = "Rabu";}
 else if (hhJumadilAwal <= 5) {jumadilAwalN = "Kamis";}
 else if (hhJumadilAwal <= 6) {jumadilAwalN = "Jumat";}
 else if (hhJumadilAwal <= 7) {jumadilAwalN = "Sabtu";}
 
 if (hhJumadisStani <= 0) {jumadisStaniN = "Sabtu";}
 else if (hhJumadisStani <= 1) {jumadisStaniN = "Minggu";}
 else if (hhJumadisStani <= 2) {jumadisStaniN = "Senin";}
 else if (hhJumadisStani <= 3) {jumadisStaniN = "Selasa";}
 else if (hhJumadisStani <= 4) {jumadisStaniN = "Rabu";}
 else if (hhJumadisStani <= 5) {jumadisStaniN = "Kamis";}
 else if (hhJumadisStani <= 6) {jumadisStaniN = "Jumat";}
 else if (hhJumadisStani <= 7) {jumadisStaniN = "Sabtu";}
 
 if (hhRojab <= 0) {rojabN = "Sabtu";}
 else if (hhRojab <= 1) {rojabN = "Minggu";}
 else if (hhRojab <= 2) {rojabN = "Senin";}
 else if (hhRojab <= 3) {rojabN = "Selasa";}
 else if (hhRojab <= 4) {rojabN = "Rabu";}
 else if (hhRojab <= 5) {rojabN = "Kamis";}
 else if (hhRojab <= 6) {rojabN = "Jumat";}
 else if (hhRojab <= 7) {rojabN = "Sabtu";}
 
 if (hhSyaban <= 0) {syabanN = "Sabtu";}
 else if (hhSyaban <= 1) {syabanN = "Minggu";}
 else if (hhSyaban <= 2) {syabanN = "Senin";}
 else if (hhSyaban <= 3) {syabanN = "Selasa";}
 else if (hhSyaban <= 4) {syabanN = "Rabu";}
 else if (hhSyaban <= 5) {syabanN = "Kamis";}
 else if (hhSyaban <= 6) {syabanN = "Jumat";}
 else if (hhSyaban <= 7) {syabanN = "Sabtu";}
 
 if (hhRomadhon <= 0) {romadhonN = "Sabtu";}
 else if (hhRomadhon <= 1) {romadhonN = "Minggu";}
 else if (hhRomadhon <= 2) {romadhonN = "Senin";}
 else if (hhRomadhon <= 3) {romadhonN = "Selasa";}
 else if (hhRomadhon <= 4) {romadhonN = "Rabu";}
 else if (hhRomadhon <= 5) {romadhonN = "Kamis";}
 else if (hhRomadhon <= 6) {romadhonN = "Jumat";}
 else if (hhRomadhon <= 7) {romadhonN = "Sabtu";}
 
 if (hhSyawal <= 0) {syawalN = "Sabtu";}
 else if (hhSyawal <= 1) {syawalN = "Minggu";}
 else if (hhSyawal <= 2) {syawalN = "Senin";}
 else if (hhSyawal <= 3) {syawalN = "Selasa";}
 else if (hhSyawal <= 4) {syawalN = "Rabu";}
 else if (hhSyawal <= 5) {syawalN = "Kamis";}
 else if (hhSyawal <= 6) {syawalN = "Jumat";}
 else if (hhSyawal <= 7) {syawalN = "Sabtu";}
 
 if (hhDzulQodah <= 0) {dzulQodahN = "Sabtu";}
 else if (hhDzulQodah <= 1) {dzulQodahN = "Minggu";}
 else if (hhDzulQodah <= 2) {dzulQodahN = "Senin";}
 else if (hhDzulQodah <= 3) {dzulQodahN = "Selasa";}
 else if (hhDzulQodah <= 4) {dzulQodahN = "Rabu";}
 else if (hhDzulQodah <= 5) {dzulQodahN = "Kamis";}
 else if (hhDzulQodah <= 6) {dzulQodahN = "Jumat";}
 else if (hhDzulQodah <= 7) {dzulQodahN = "Sabtu";}
 
 if (hhDzulHijjah <= 0) {dzulHijjahN = "Sabtu";}
 else if (hhDzulHijjah <= 1) {dzulHijjahN = "Minggu";}
 else if (hhDzulHijjah <= 2) {dzulHijjahN = "Senin";}
 else if (hhDzulHijjah <= 3) {dzulHijjahN = "Selasa";}
 else if (hhDzulHijjah <= 4) {dzulHijjahN = "Rabu";}
 else if (hhDzulHijjah <= 5) {dzulHijjahN = "Kamis";}
 else if (hhDzulHijjah <= 6) {dzulHijjahN = "Jumat";}
 else if (hhDzulHijjah <= 7) {dzulHijjahN = "Sabtu";}
 
 let jjRobiulAwal = (jJ + 4) % 5;
 let jjRobiusStani = (jJ + 4) % 5;
 let jjJumadilAwal = (jJ + 3) % 5;
 let jjJumadisStani = (jJ + 3) % 5;
 let jjRojab = (jJ + 2) % 5;
 let jjSyaban = (jJ + 2) % 5;
 let jjRomadhon = (jJ + 1) % 5;
 let jjSyawal = (jJ + 1) % 5;
 
 if (jjRobiulAwal <= 0) {robiulAwalP = "Kliwon";}
 else if (jjRobiulAwal <= 1) {robiulAwalP = "Legi";}
 else if (jjRobiulAwal <= 2) {robiulAwalP = "Pahing";}
 else if (jjRobiulAwal <= 3) {robiulAwalP = "Pon";}
 else if (jjRobiulAwal <= 4) {robiulAwalP = "Wage";}
 else if (jjRobiulAwal <= 5) {robiulAwalP = "Kliwon";}
 
 if (jjRobiusStani <= 0) {robiusStaniP = "Kliwon";}
 else if (jjRobiusStani <= 1) {robiusStaniP = "Legi";}
 else if (jjRobiusStani <= 2) {robiusStaniP = "Pahing";}
 else if (jjRobiusStani <= 3) {robiusStaniP = "Pon";}
 else if (jjRobiusStani <= 4) {robiusStaniP = "Wage";}
 else if (jjRobiusStani <= 5) {robiusStaniP = "Kliwon";}
 
 if (jjJumadilAwal <= 0) {jumadilAwalP = "Kliwon";}
 else if (jjJumadilAwal <= 1) {jumadilAwalP = "Legi";}
 else if (jjJumadilAwal <= 2) {jumadilAwalP = "Pahing";}
 else if (jjJumadilAwal <= 3) {jumadilAwalP = "Pon";}
 else if (jjJumadilAwal <= 4) {jumadilAwalP = "Wage";}
 else if (jjJumadilAwal <= 5) {jumadilAwalP = "Kliwon";}
 
 if (jjJumadisStani <= 0) {jumadisStaniP = "Kliwon";}
 else if (jjJumadisStani <= 1) {jumadisStaniP = "Legi";}
 else if (jjJumadisStani <= 2) {jumadisStaniP = "Pahing";}
 else if (jjJumadisStani <= 3) {jumadisStaniP = "Pon";}
 else if (jjJumadisStani <= 4) {jumadisStaniP = "Wage";}
 else if (jjJumadisStani <= 5) {jumadisStaniP = "Kliwon";}
 
 if (jjRojab <= 0) {rojabP = "Kliwon";}
 else if (jjRojab <= 1) {rojabP = "Legi";}
 else if (jjRojab <= 2) {rojabP = "Pahing";}
 else if (jjRojab <= 3) {rojabP = "Pon";}
 else if (jjRojab <= 4) {rojabP = "Wage";}
 else if (jjRojab <= 5) {rojabP = "Kliwon";}
 
 if (jjSyaban <= 0) {syabanP = "Kliwon";}
 else if (jjSyaban <= 1) {syabanP = "Legi";}
 else if (jjSyaban <= 2) {syabanP = "Pahing";}
 else if (jjSyaban <= 3) {syabanP = "Pon";}
 else if (jjSyaban <= 4) {syabanP = "Wage";}
 else if (jjSyaban <= 5) {syabanP = "Kliwon";}
 
 if (jjRomadhon <= 0) {romadhonP = "Kliwon";}
 else if (jjRomadhon <= 1) {romadhonP = "Legi";}
 else if (jjRomadhon <= 2) {romadhonP = "Pahing";}
 else if (jjRomadhon <= 3) {romadhonP = "Pon";}
 else if (jjRomadhon <= 4) {romadhonP = "Wage";}
 else if (jjRomadhon <= 5) {romadhonP = "Kliwon";}
 
 if (jjSyawal <= 0) {syawalP = "Kliwon";}
 else if (jjSyawal <= 1) {syawalP = "Legi";}
 else if (jjSyawal <= 2) {syawalP = "Pahimg";}
 else if (jjSyawal <= 3) {syawalP = "Pon";}
 else if (jjSyawal <= 4) {syawalP = "Wage";}
 else if (jjSyawal <= 5) {syawalP = "Kliwon";}
 
 if (kbbs == "Kabisah") {uBln = "30";}
 else {uBln = "29";}
 
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
 	   	<tr><td><b>No</td>
 	      	<td><b>Bulan</td>
 	        	<td><b>H.NSL</td>
 	          	<td><pre> <b>H.PSN</td>
 		            <td><b>U.Bln</td></tr>
 	              	
 	              	<tr><td>1</td>
 	                  <td>Muharom</td>
 	                    <td><pre> ${hmth}</td>
 	                      <td><pre> ${hmp}</td>
 	                        <td><pre> 30</td></tr>
 	              	<tr><td>2</td>
 	                  <td>Sopar</td>
 	                    <td><pre> ${soparN}</td>
 	                      <td><pre> ${hmp}</td>
 	                        <td><pre> 29</td></tr>
 	              	<tr><td>3</td>
 	                  <td>Robiul Awal</td>
 	                    <td><pre> ${robiulAwalN}</td>
 	                      <td><pre> ${robiulAwalP}</td>
 	                        <td><pre> 30</td></tr>
 	              	<tr><td>4</td>
 	                  <td>Robius Stani</td>
 	                    <td><pre> ${robiusStaniN}</td>
 	                      <td><pre> ${robiusStaniP}</td>
 	                        <td><pre> 29</td></tr>
 	              	<tr><td>5</td>
 	                  <td>Jumadil Awal</td>
 	                    <td><pre> ${jumadilAwalN}</td>
 	                      <td><pre> ${jumadilAwalP}</td>
 	                        <td><pre> 30</td></tr>
 	              	<tr><td>6</td>
 	                  <td>Jumadis Stani</td>
 	                    <td><pre> ${jumadisStaniN}</td>
 	                      <td><pre> ${jumadisStaniP}</td>
 	                        <td><pre> 29</td></tr>
 	              	<tr><td>7</td>
 	                  <td>Rojab</td>
 	                    <td><pre> ${rojabN}</td>
 	                      <td><pre> ${rojabP}</td>
 	                        <td><pre> 30</td></tr>
 	              	<tr><td>8</td>
 	                  <td>Syaban</td>
 	                    <td><pre> ${syabanN}</td>
 	                      <td><pre> ${syabanP}</td>
 	                        <td><pre> 29</td></tr>
 	              	<tr><td>9</td>
 	                  <td>Romadhon</td>
 	                    <td><pre> ${romadhonN}</td>
 	                      <td><pre> ${romadhonP}</td>
 	                        <td><pre> 30</td></tr>
 	              	<tr><td>10</td>
 	                  <td>Syawal</td>
 	                    <td><pre> ${syawalN}</td>
 	                      <td><pre> ${syawalP}</td>
 	                        <td><pre> 30</td></tr>
 	              	<tr><td>11</td>
 	                  <td>Dzul-Qo'dah</td>
 	                    <td><pre> ${dzulQodahN}</td>
 	                      <td><pre> ${hmp}</td>
 	                        <td><pre> 29</td></tr>
 	              	<tr><td>12</td>
 	                  <td>Dzul-Hijjah</td>
 	                    <td><pre> ${dzulHijjahN}</td>
 	                      <td><pre> ${hmp}</td>
 	                        <td><pre> ${uBln}</td></tr>
 		</table>
	  `; 
 	} 
  }; 
  