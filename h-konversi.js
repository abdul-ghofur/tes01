const calculate2 = () => { 
  // Selected Year
  let thh = document.querySelector("#tahunhijriyah").value; 
  let totaltahun = parseFloat(thh) 
  let thtm = totaltahun -1;
  let a = Math.trunc((thtm)/30);
  let a2 =(thtm) /30;
  let a3 = a2 - a;
  let a4 = a3 *30;
  let b = Math.round(a4);
  let c = a * 10631;
  let d = b * 354;
  if (b >= 29) { e = 11;} else if (b >= 26) {e = 10;} else if (b >= 24) { e = 9;} else if (b >= 21) {e = 8;} else if (b >= 18) {e = 7;} else if (b >= 15) {e = 6;} else if (b >= 13) {e = 5;} else if (b >= 10) {e = 4;} else if (b >= 7) {e = 3;} else if (b >= 6) {e = 2;} else if (b >= 2) {e = 1} else if (b >= 0) {e = 0}
    // Selected Moon
  let bln = document.querySelector("#blnhijriyah").value; 
  let bbb = parseFloat(bln)
  if (bbb <= 1) {fff = 0;
  } else if (bbb <= 2) {fff = 30;
  } else if (bbb <= 3) {fff = 59;
  } else if (bbb <= 4) {fff = 89;
  } else if (bbb <= 5) {fff = 118;
  } else if (bbb <= 6) {fff = 148;
  } else if (bbb <= 7) {fff = 177;
  } else if (bbb <= 8) {fff = 207;
  } else if (bbb <= 9) {fff = 236;
  } else if (bbb <= 10) {fff = 266;
  } else if (bbb <= 11) {fff = 295;
  } else if (bbb <= 12) {fff = 325;
  }
    // Selected Tanggal
  let tgl = document.querySelector("#tglhijriyah").value; 
  let tg = parseFloat(tgl)
  let tg2 = tg + 0; // Agar tidak dia anggap sebagai string
  let jhh = c + d + e + fff + tg2;
  let slh = jhh + 227014;
  let ttm = Math.trunc((slh)/365.2425); 
  let ss = Math.round((slh /365.2425-ttm) *365.2425);
  let tm = ttm +1;
  let kb1 = tm % 4;
  if (kb1 ==0) {kb = 'Kabisah'} else {kb = "Basitoh"}
  if (ss >= 334) {hsb = "November"
  } else if (ss >= 304) {hsb = "Oktober";
  } else if (ss >= 273) {hsb = "September";
  } else if (ss >= 243) {hsb = "Agustus";
  } else if (ss >= 212) {hsb = "Juli";
  } else if (ss >= 181) {hsb = "Juni";
  } else if (ss >= 151) {hsb = "Mei";
  } else if (ss >= 120) {hsb = "April";
  } else if (ss >= 90) {hsb = "Maret";
  } else if (ss >= 59) {hsb = "Februari";
  } else if (ss >= 31) {hsb = "Januari";
  } else if (ss >= 0) {hsb = "Desember";
  }
  if (ss >= 334) {shh = 334;
  } else if (ss >= 304) {shh = 304;
  } else if (ss >= 273) {shh = 273;
  } else if (ss >= 243) {shh = 243;
  } else if (ss >= 212) {shh = 212;
  } else if (ss >= 181) {shh = 181;
  } else if (ss >= 151) {shh = 151;
  } else if (ss >= 120) {shh = 120;
  } else if (ss >= 90) {shh = 90;
  } else if (ss >= 59) {shh = 59;
  } else if (ss >= 31) {shh = 31;
  } else if (ss >= 0) {shh = 0;
  }
  let shh2 = ss - shh;
  if (ss >= 365) {hbm = "Januari";
  } else if (ss >= 334) {hbm = "Desember";
  } else if (ss >= 304) {hbm = "Novemer";
  } else if (ss >= 273) {hbm = "Oktober";
  } else if (ss >= 243) {hbm = "September";
  } else if (ss >= 212) {hbm = "Agustus";
  } else if (ss >= 181) {hbm = "Juli";
  } else if (ss >= 151) {hbm = "Juni";
  } else if (ss >= 120) {hbm = "Mei";
  } else if (ss >= 90) {hbm = "April";
  } else if (ss >= 59) {hbm = "Marer";
  } else if (ss >= 31) {hbm = "Pebruari";
  } else if (ss >= 0) {hbm = "Pebruari";
  }
  // Mengetahui Hari Nasional Dan Pasaran
  let hn = jhh % 7; 
  if (hn == 0) {hrn = 'Kamis';
  } else if (hn == 1) {hrn = 'Jumat';
  } else if (hn == 2) {hrn = 'Sabtu';
  } else if (hn == 3) {hrn = 'Minggu';
  } else if (hn == 4) {hrn = 'Senin';
  } else if (hn == 5) {hrn = 'Selasa';
  } else if (hn == 6) {hrn = 'Rabu';
  } else if (hn == 7) {hrn = 'Kamis';
  } 
  let hp = jhh % 5;
  if (hp == 0) {hrp = 'Kliwon';
  } else if (hp == 1) {hrp = 'Legi';
  } else if (hp == 2) {hrp = 'Pahing';
  } else if (hp == 3) {hrp = 'Pon';
  } else if (hp == 4) {hrp = 'Wage';
  } else if (hp == 5) {hrp = 'Kliwon';
  } 
  
  
  
    	document.querySelector( 
  		"#showdata1"
  	).innerHTML = 
 		`
 	<table>
  <tr><td>Tahun Tam</td><td><pre>:</pre></td><td>${thtm}</td></tr>
  <tr><td>Periode 1×30 th</td><td><pre>:</pre></td><td>${a}</td></tr>
  <tr><td>Daor / Sisa Periode</td><td><pre>:</pre></td><td>${b}</td></tr>
  <tr><td>Jumlah Hari Periode</td><td><pre>:</pre></td><td>${c}</td></tr>	 	
  <tr><td>Jumlah Hari Sisa Periode</td><td><pre>:</pre></td><td>${d}</td></tr>
  <tr><td>Jumlah Tahun Kabisat</td><td><pre>:</pre></td><td>${e}</td></tr>	
  <tr><td>Jumlah Hari</td><td><pre>:</pre></td><td>${fff}</td></tr>
  <tr><td>Jumlah Hari Hijriyah</td><td><pre>:</pre></td><td>${jhh}</td></tr> 
 	<tr><td>Selisih</td><td><pre>:</pre></td><td>${slh}</td></tr>
 	<tr><td>Tahun Tam Masehi</td><td><pre>:</pre></td><td>${ttm}</td></tr>
 	<tr><td>Sisa</td><td><pre>:</pre></td><td>${ss}</td></tr>
 	<tr><td>Tahun Masehi</td><td><pre>:</pre></td><td>${tm}</td></tr>
 	<tr><td>Kabisah/Basitoh</td><td><pre>:</pre></td><td>${kb}</td></tr>
 	<tr><td>Bulan Tam</td><td><pre>:</pre></td><td>${hsb}</td></tr>
 	<tr><td>Umur Bulan Tam</td><td><pre>:</pre></td><td>${shh}</td></tr
 	<tr><td>Tanggal Konversi</td><td><pre>:</pre></td><td>${shh2}</td></tr>
  <tr><td>Bulan Konversi</td><td><pre>:</pre></td><td>${hbm}</td></tr>
  <tr><td>Hn</td><td><pre>:</pre></td><td>${hn}</td></tr>
  <tr><td>Hari Nasional</td><td><pre>:</pre></td><td>${hrn}</td></tr>
  <tr><td>Hp</td><td><pre>:</pre></td><td>${hp}</td></tr>
  <tr><td>Hari Pasaran</td><td><pre>:</pre></td><td>${hrp}</td></tr>
 	         		</table>         	
	  `; 
  }; 