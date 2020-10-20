(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{80:function(a,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return o})),n.d(e,"metadata",(function(){return d})),n.d(e,"rightToc",(function(){return l})),n.d(e,"default",(function(){return m}));var t=n(2),i=n(6),r=(n(0),n(91)),o={id:"navigation-component",title:"Navigation Component",sidebar_label:"Navigation Component"},d={unversionedId:"mobile/navigation-component",id:"mobile/navigation-component",isDocsHomePage:!1,title:"Navigation Component",description:"Pendahuluan",source:"@site/docs/mobile/navigation-component.md",slug:"/mobile/navigation-component",permalink:"/docs/mobile/navigation-component",version:"current",sidebar_label:"Navigation Component",sidebar:"mobileSidebar",previous:{title:"Pemrograman Mobile",permalink:"/docs/mobile/summary"}},l=[{value:"Pendahuluan",id:"pendahuluan",children:[{value:"Tujuan Pembelajaran",id:"tujuan-pembelajaran",children:[]},{value:"Alat dan Bahan",id:"alat-dan-bahan",children:[]}]},{value:"Navigation Component",id:"navigation-component",children:[{value:"Destination",id:"destination",children:[]},{value:"Action",id:"action",children:[]}]},{value:"Praktikum",id:"praktikum",children:[]},{value:"Tantangan",id:"tantangan",children:[]},{value:"Bahan Bacaan",id:"bahan-bacaan",children:[]}],c={rightToc:l};function m(a){var e=a.components,n=Object(i.a)(a,["components"]);return Object(r.b)("wrapper",Object(t.a)({},c,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"pendahuluan"},"Pendahuluan"),Object(r.b)("p",null,"Pada praktikum kali ini anda akan mempelajari untuk membangun aplikasi ",Object(r.b)("em",{parentName:"p"},"single\nactivity multi fragment")," dengan menggunakan ",Object(r.b)("em",{parentName:"p"},"navigation component"),"."),Object(r.b)("h3",{id:"tujuan-pembelajaran"},"Tujuan Pembelajaran"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Mahasiswa mampu mengkonversi ",Object(r.b)("em",{parentName:"li"},"multi activity")," menjadi ",Object(r.b)("em",{parentName:"li"},"single activity multi\nfragment"),"."),Object(r.b)("li",{parentName:"ol"},"Mahasiswa mampu memasang dan menerapkan ",Object(r.b)("em",{parentName:"li"},"navigation component"),".")),Object(r.b)("h3",{id:"alat-dan-bahan"},"Alat dan Bahan"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Laptop atau PC"),Object(r.b)("li",{parentName:"ol"},"Android Studio"),Object(r.b)("li",{parentName:"ol"},"Starter Code")),Object(r.b)("h2",{id:"navigation-component"},"Navigation Component"),Object(r.b)("h3",{id:"destination"},"Destination"),Object(r.b)("h3",{id:"action"},"Action"),Object(r.b)("h2",{id:"praktikum"},"Praktikum"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Silahkan klik tautan starter project yang telah dibagikan oleh masing-masing\ndosen pengampu.")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Buka starter code yang telah disiapkan dengan menggunakan ",Object(r.b)("strong",{parentName:"p"},"Android Studio"),".\nAmati susunan file/directory yang terdapat pada starter code.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Buka file ",Object(r.b)("inlineCode",{parentName:"p"},"fragment_score.xml"),", pelajari desain aplikasi Skor dengan seksama.\nPada aplikasi terdapat dua bagian yaitu tim ",Object(r.b)("strong",{parentName:"p"},"Home")," dan ",Object(r.b)("strong",{parentName:"p"},"Away"),". Skor pada\ntim didasarkan pada daftar pencetak gol untuk masing-masing tim.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Dari analisa sebelumnya, dapat diketahui bahwa dibutuhkan kumpulan data untuk\nmenyimpan daftar pemain pencetak gol.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Tambahkan definisi variabel data pada ",Object(r.b)("inlineCode",{parentName:"p"},"fragment_score.xml")," yang digunakan\nuntuk menyimpan data skor untuk masing-masing tim. Pendekatan pada praktikum\nini menggunakan databinding."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-xml",metastring:'title="fragment_score.xml"',title:'"fragment_score.xml"'}),'<?xml version="1.0" encoding="utf-8"?>\n<layout\n  xmlns:android="http://schemas.android.com/apk/res/android"\n  xmlns:app="http://schemas.android.com/apk/res-auto"\n  xmlns:tools="http://schemas.android.com/tools"\n  >\n  <data>\n    <variable\n      name="homeGoalScorerList"\n      type="java.util.List" />\n    <variable\n      name="awayGoalScorerList"\n      type="java.util.List" />\n  </data>\n\n  <androidx.constraintlayout.widget.ConstraintLayout\n    android:layout_width="match_parent"\n    android:layout_height="match_parent"\n    tools:context=".fragments.ScoreFragment">\n\n    \x3c!-- widget .... --\x3e\n  </androidx.constraintlayout.widget.ConstraintLayout>\n</layout>\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Buka file ",Object(r.b)("inlineCode",{parentName:"p"},"ScoreFragment.java"),", hubungkan databinding layout dengan fragment\njava dengan menambahkan kode berikut pada method ",Object(r.b)("inlineCode",{parentName:"p"},"onCreateView()")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java",metastring:'title="ScoreFragment.java" {4-8}',title:'"ScoreFragment.java"',"{4-8}":!0}),"@Override\npublic View onCreateView(LayoutInflater inflater, ViewGroup container,\n                         Bundle savedInstanceState) {\n    FragmentScoreBinding binding = DataBindingUtil\n        .inflate(inflater, R.layout.fragment_score, container, false);\n    binding.setHomeGoalScorerList(homeGoalScorerList);\n    binding.setAwayGoalScorerList(awayGoalScorerList);\n    return binding.getRoot();\n}\n")))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Untuk menghitung skor tim, didapatkan dengan menghitung ukuran jumlah data\npencetak gol dengan method ",Object(r.b)("inlineCode",{parentName:"p"},"size()"),". Ekspresi databinding yang dibutuhkan untuk\nmenampilkan skor tim ",Object(r.b)("strong",{parentName:"p"},"Home")," silahkan perhatikan kode berikut pada bagian\n",Object(r.b)("inlineCode",{parentName:"p"},"fragment_score.xml"),"."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-xml",metastring:"{7}","{7}":!0}),'\x3c!-- Layout --\x3e\n\n    <TextView\n        android:id="@+id/text_home_score"\n        android:layout_width="wrap_content"\n        android:layout_height="wrap_content"\n        android:text="@{String.valueOf(homeGoalScorerList.size())}"\n        android:textSize="64sp"\n        app:layout_constraintBottom_toTopOf="@+id/guideline"\n        app:layout_constraintEnd_toEndOf="parent"\n        app:layout_constraintStart_toStartOf="parent"\n        app:layout_constraintTop_toTopOf="parent" />\n\n\x3c!-- Layout --\x3e\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Modifikasi bagian ",Object(r.b)("strong",{parentName:"p"},"TextView")," untuk tim ",Object(r.b)("strong",{parentName:"p"},"Away")," sehingga dapat menampilkan\njumlah skor seperti pada tim ",Object(r.b)("strong",{parentName:"p"},"Home"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Tombol pada tampilan ",Object(r.b)("inlineCode",{parentName:"p"},"fragment_score")," masih belum memiliki event. Untuk\nmenghubungkan fragment dan layout dengan menggunakan konsep databinding,\ndibutuhkan tambahan deklarasi variabel ",Object(r.b)("inlineCode",{parentName:"p"},"fragment"),". Tambahkan variabel pada\nbagian data dengan jenis ",Object(r.b)("inlineCode",{parentName:"p"},"ScoreFragment"),"."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-xml",metastring:'title="fragment_score.xml" {3-4}',title:'"fragment_score.xml"',"{3-4}":!0}),'<data>\n    <variable\n        name="fragment"\n        type="id.ac.polinema.skor.fragments.ScoreFragment" />\n</data>\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Buka kembali file ",Object(r.b)("inlineCode",{parentName:"p"},"ScoreFragment.java")," dan tambahkan pengaturan databinding\nuntuk fragment. Silahkan perhatikan kode berikut."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java",metastring:'title="ScoreFragment.java" {8}',title:'"ScoreFragment.java"',"{8}":!0}),"@Override\npublic View onCreateView(LayoutInflater inflater, ViewGroup container,\n                         Bundle savedInstanceState) {\n    FragmentScoreBinding binding = DataBindingUtil\n      .inflate(inflater, R.layout.fragment_score, container, false);\n    binding.setHomeGoalScorerList(homeGoalScorerList);\n    binding.setAwayGoalScorerList(awayGoalScorerList);\n    binding.setFragment(this);\n    return binding.getRoot();\n}\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Tambahkan event click pada id ",Object(r.b)("inlineCode",{parentName:"p"},"button_add_home")," dengan ekspresi databinding\n",Object(r.b)("inlineCode",{parentName:"p"},'android:onClick="@{(v) -> fragment.onAddHomeClick(v)}"')," dan pada id\n",Object(r.b)("inlineCode",{parentName:"p"},"button_add_away")," dengan ekspresi databinding ",Object(r.b)("inlineCode",{parentName:"p"},'android:onClick="@{(v) ->\nfragment.onAddAwayClick(v)}"'),"."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-xml"}),'    <Button\n        android:id="@+id/button_add_home"\n        android:layout_width="0dp"\n        android:layout_height="wrap_content"\n        android:layout_marginStart="8dp"\n        android:layout_marginEnd="8dp"\n        android:layout_marginBottom="16dp"\n        android:onClick="@{(v) -> fragment.onAddHomeClick(v)}"\n        android:text="Add Score Home"\n        app:layout_constraintBottom_toTopOf="@+id/guideline"\n        app:layout_constraintEnd_toEndOf="parent"\n        app:layout_constraintStart_toStartOf="parent" />\n\n    <Button\n        android:id="@+id/button_add_away"\n        android:layout_width="0dp"\n        android:layout_height="wrap_content"\n        android:layout_marginStart="8dp"\n        android:layout_marginEnd="8dp"\n        android:layout_marginBottom="16dp"\n        android:text="Add Score Away"\n        android:onClick="@{(v) -> fragment.onAddAwayClick(v)}"\n        app:layout_constraintBottom_toBottomOf="parent"\n        app:layout_constraintEnd_toEndOf="parent"\n        app:layout_constraintHorizontal_bias="0.0"\n        app:layout_constraintStart_toStartOf="parent" />\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Tambahkan method ",Object(r.b)("inlineCode",{parentName:"p"},"onAddHomeClick(View view)")," pada ",Object(r.b)("inlineCode",{parentName:"p"},"ScoreFragment"),". Pada method\nini berisi logika untuk berpindah ke ",Object(r.b)("inlineCode",{parentName:"p"},"GoalFragment"),". Pada perpindahan ini\ndikirimkan data tim home menggunakan konstanta ",Object(r.b)("inlineCode",{parentName:"p"},"HOME_REQUEST_KEY"),"."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java",metastring:'title="ScoreFragment.java"',title:'"ScoreFragment.java"'}),"public void onAddHomeClick(View view) {\n    ScoreFragmentDirections.GoalScorerAction action = ScoreFragmentDirections.goalScorerAction(HOME_REQUEST_KEY);\n    Navigation.findNavController(view).navigate(action);\n}\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Tambahkan method ",Object(r.b)("inlineCode",{parentName:"p"},"onAddAwayClick(View view)")," pada ",Object(r.b)("inlineCode",{parentName:"p"},"ScoreFragment"),". Pada method\nini berisi logika untuk berpindah ke ",Object(r.b)("inlineCode",{parentName:"p"},"GoalFragment"),". Pada perpindahan ini\ndikirimkan data tim home menggunakan konstanta ",Object(r.b)("inlineCode",{parentName:"p"},"AWAY_REQUEST_KEY"),"."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"public void onAddAwayClick(View view) {\n    ScoreFragmentDirections.GoalScorerAction action = ScoreFragmentDirections.goalScorerAction(AWAY_REQUEST_KEY);\n    Navigation.findNavController(view).navigate(action);\n}\n")))),Object(r.b)("h2",{id:"tantangan"},"Tantangan"),Object(r.b)("p",null,"Tampilkan data pemain beserta menit gol terjadi untuk masing-masing tim pada id\n",Object(r.b)("inlineCode",{parentName:"p"},"text_home_scorer")," dan ",Object(r.b)("inlineCode",{parentName:"p"},"text_away_scorer"),". Contoh tampilan yang diinginkan:"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{}),'Andi 5" Budi 10"\n')),Object(r.b)("h2",{id:"bahan-bacaan"},"Bahan Bacaan"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"https://developer.android.com/guide/navigation/navigation-getting-started"}),"https://developer.android.com/guide/navigation/navigation-getting-started")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"https://medium.com/swlh/android-navigation-component-part-1-6191323eaf39"}),"https://medium.com/swlh/android-navigation-component-part-1-6191323eaf39")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"https://proandroiddev.com/android-navigation-component-fc783c03bb8d"}),"https://proandroiddev.com/android-navigation-component-fc783c03bb8d")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(t.a)({parentName:"li"},{href:"https://codelabs.developers.google.com/codelabs/android-navigation/#0"}),"https://codelabs.developers.google.com/codelabs/android-navigation/#0"))))}m.isMDXComponent=!0},91:function(a,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return g}));var t=n(0),i=n.n(t);function r(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function o(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function d(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function l(a,e){if(null==a)return{};var n,t,i=function(a,e){if(null==a)return{};var n,t,i={},r=Object.keys(a);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||(i[n]=a[n]);return i}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(i[n]=a[n])}return i}var c=i.a.createContext({}),m=function(a){var e=i.a.useContext(c),n=e;return a&&(n="function"==typeof a?a(e):d(d({},e),a)),n},p=function(a){var e=m(a.components);return i.a.createElement(c.Provider,{value:e},a.children)},b={inlineCode:"code",wrapper:function(a){var e=a.children;return i.a.createElement(i.a.Fragment,{},e)}},u=i.a.forwardRef((function(a,e){var n=a.components,t=a.mdxType,r=a.originalType,o=a.parentName,c=l(a,["components","mdxType","originalType","parentName"]),p=m(n),u=t,g=p["".concat(o,".").concat(u)]||p[u]||b[u]||r;return n?i.a.createElement(g,d(d({ref:e},c),{},{components:n})):i.a.createElement(g,d({ref:e},c))}));function g(a,e){var n=arguments,t=e&&e.mdxType;if("string"==typeof a||t){var r=n.length,o=new Array(r);o[0]=u;var d={};for(var l in e)hasOwnProperty.call(e,l)&&(d[l]=e[l]);d.originalType=a,d.mdxType="string"==typeof a?a:t,o[1]=d;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);