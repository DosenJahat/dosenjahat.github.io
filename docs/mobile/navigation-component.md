---
id: navigation-component
title: Navigation Component
sidebar_label: Navigation Component
---

## Pendahuluan

Pada praktikum kali ini anda akan mempelajari untuk membangun aplikasi *single
activity multi fragment* dengan menggunakan *navigation component*.

### Tujuan Pembelajaran
1. Mahasiswa mampu mengkonversi *multi activity* menjadi *single activity multi
   fragment*.
2. Mahasiswa mampu memasang dan menerapkan *navigation component*.

### Alat dan Bahan

1. Laptop atau PC
2. Android Studio
3. Starter Code

## Navigation Component

### Destination

### Action

## Praktikum

> Silahkan klik tautan starter project yang telah dibagikan oleh masing-masing
> dosen pengampu.

- Buka starter code yang telah disiapkan dengan menggunakan **Android Studio**.
 Amati susunan file/directory yang terdapat pada starter code.

- Buka file `fragment_score.xml`, pelajari desain aplikasi Skor dengan seksama.
 Pada aplikasi terdapat dua bagian yaitu tim **Home** dan **Away**. Skor pada
 tim didasarkan pada daftar pencetak gol untuk masing-masing tim.

- Dari analisa sebelumnya, dapat diketahui bahwa dibutuhkan kumpulan data untuk
 menyimpan daftar pemain pencetak gol.

- Tambahkan definisi variabel data pada `fragment_score.xml` yang digunakan
 untuk menyimpan data skor untuk masing-masing tim. Pendekatan pada praktikum
 ini menggunakan databinding.

  ```xml title="fragment_score.xml"
  <?xml version="1.0" encoding="utf-8"?>
  <layout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    >
    <data>
      <variable
        name="homeGoalScorerList"
        type="java.util.List" />
      <variable
        name="awayGoalScorerList"
        type="java.util.List" />
    </data>

    <androidx.constraintlayout.widget.ConstraintLayout
      android:layout_width="match_parent"
      android:layout_height="match_parent"
      tools:context=".fragments.ScoreFragment">

      <!-- widget .... -->
    </androidx.constraintlayout.widget.ConstraintLayout>
  </layout>
  ```
- Buka file `ScoreFragment.java`, hubungkan databinding layout dengan fragment
 java dengan menambahkan kode berikut pada method `onCreateView()`

  ```java title="ScoreFragment.java" {4-8}
	@Override
	public View onCreateView(LayoutInflater inflater, ViewGroup container,
							 Bundle savedInstanceState) {
		FragmentScoreBinding binding = DataBindingUtil
			.inflate(inflater, R.layout.fragment_score, container, false);
		binding.setHomeGoalScorerList(homeGoalScorerList);
		binding.setAwayGoalScorerList(awayGoalScorerList);
		return binding.getRoot();
	}
  ```


- Untuk menghitung skor tim, didapatkan dengan menghitung ukuran jumlah data
 pencetak gol dengan method `size()`. Ekspresi databinding yang dibutuhkan untuk
 menampilkan skor tim **Home** silahkan perhatikan kode berikut pada bagian
 `fragment_score.xml`.

  ```xml {7}
  <!-- Layout -->

		<TextView
			android:id="@+id/text_home_score"
			android:layout_width="wrap_content"
			android:layout_height="wrap_content"
			android:text="@{String.valueOf(homeGoalScorerList.size())}"
			android:textSize="64sp"
			app:layout_constraintBottom_toTopOf="@+id/guideline"
			app:layout_constraintEnd_toEndOf="parent"
			app:layout_constraintStart_toStartOf="parent"
			app:layout_constraintTop_toTopOf="parent" />

  <!-- Layout -->
  ```

- Modifikasi bagian **TextView** untuk tim **Away** sehingga dapat menampilkan
 jumlah skor seperti pada tim **Home**.

- Tombol pada tampilan `fragment_score` masih belum memiliki event. Untuk
 menghubungkan fragment dan layout dengan menggunakan konsep databinding,
 dibutuhkan tambahan deklarasi variabel `fragment`. Tambahkan variabel pada
 bagian data dengan jenis `ScoreFragment`.

  ```xml title="fragment_score.xml" {3-4}
	<data>
		<variable
			name="fragment"
			type="id.ac.polinema.skor.fragments.ScoreFragment" />
	</data>
  ```

- Buka kembali file `ScoreFragment.java` dan tambahkan pengaturan databinding
 untuk fragment. Silahkan perhatikan kode berikut.

  ```java title="ScoreFragment.java" {8}
	@Override
	public View onCreateView(LayoutInflater inflater, ViewGroup container,
							 Bundle savedInstanceState) {
      FragmentScoreBinding binding = DataBindingUtil
        .inflate(inflater, R.layout.fragment_score, container, false);
      binding.setHomeGoalScorerList(homeGoalScorerList);
      binding.setAwayGoalScorerList(awayGoalScorerList);
      binding.setFragment(this);
      return binding.getRoot();
	}
  ```

- Tambahkan event click pada id `button_add_home` dengan ekspresi databinding
 `android:onClick="@{(v) -> fragment.onAddHomeClick(v)}"` dan pada id
 `button_add_away` dengan ekspresi databinding `android:onClick="@{(v) ->
 fragment.onAddAwayClick(v)}"`.

  ```xml
		<Button
			android:id="@+id/button_add_home"
			android:layout_width="0dp"
			android:layout_height="wrap_content"
			android:layout_marginStart="8dp"
			android:layout_marginEnd="8dp"
			android:layout_marginBottom="16dp"
			android:onClick="@{(v) -> fragment.onAddHomeClick(v)}"
			android:text="Add Score Home"
			app:layout_constraintBottom_toTopOf="@+id/guideline"
			app:layout_constraintEnd_toEndOf="parent"
			app:layout_constraintStart_toStartOf="parent" />

		<Button
			android:id="@+id/button_add_away"
			android:layout_width="0dp"
			android:layout_height="wrap_content"
			android:layout_marginStart="8dp"
			android:layout_marginEnd="8dp"
			android:layout_marginBottom="16dp"
			android:text="Add Score Away"
			android:onClick="@{(v) -> fragment.onAddAwayClick(v)}"
			app:layout_constraintBottom_toBottomOf="parent"
			app:layout_constraintEnd_toEndOf="parent"
			app:layout_constraintHorizontal_bias="0.0"
			app:layout_constraintStart_toStartOf="parent" />
  ```

- Tambahkan method `onAddHomeClick(View view)` pada `ScoreFragment`. Pada method
 ini berisi logika untuk berpindah ke `GoalFragment`. Pada perpindahan ini
 dikirimkan data tim home menggunakan konstanta `HOME_REQUEST_KEY`.

  ```java title="ScoreFragment.java"
	public void onAddHomeClick(View view) {
		ScoreFragmentDirections.GoalScorerAction action = ScoreFragmentDirections.goalScorerAction(HOME_REQUEST_KEY);
		Navigation.findNavController(view).navigate(action);
	}
  ```

- Tambahkan method `onAddAwayClick(View view)` pada `ScoreFragment`. Pada method
 ini berisi logika untuk berpindah ke `GoalFragment`. Pada perpindahan ini
 dikirimkan data tim home menggunakan konstanta `AWAY_REQUEST_KEY`.

  ```java
	public void onAddAwayClick(View view) {
		ScoreFragmentDirections.GoalScorerAction action = ScoreFragmentDirections.goalScorerAction(AWAY_REQUEST_KEY);
		Navigation.findNavController(view).navigate(action);
	}
  ```

## Tantangan

Tampilkan data pemain beserta menit gol terjadi untuk masing-masing tim pada id
`text_home_scorer` dan `text_away_scorer`. Contoh tampilan yang diinginkan:

```
Andi 5" Budi 10"
```

## Bahan Bacaan

1. https://developer.android.com/guide/navigation/navigation-getting-started
2. https://medium.com/swlh/android-navigation-component-part-1-6191323eaf39
3. https://proandroiddev.com/android-navigation-component-fc783c03bb8d
4. https://codelabs.developers.google.com/codelabs/android-navigation/#0
