---
id: viewmodel
title: ViewModel
sidebar_label: ViewModel
---

## Pendahuluan

Pada praktikum kali ini anda akan mempelajari untuk membangun aplikasi *single
activity multi fragment* dengan menggunakan *navigation component* dan
viewmodel. Pendekatan ini dikenal merupakan bagian dari pola MVVM (Model View
ViewModel).

### Tujuan Pembelajaran
1. Mahasiswa mengenal tentang arsitektur MVVM.
2. Mahasiswa memahami lifecycle viewmodel pada MVVM.
3. Mahasiswa mampu menerapkan viewmodel pada Android.

### Alat dan Bahan

1. Laptop atau PC
2. Android Studio
3. Starter Code

## ViewModel

## Praktikum

> Silahkan klik tautan starter project yang telah dibagikan oleh masing-masing
> dosen pengampu.

- Buka starter code yang telah disiapkan dengan menggunakan **Android Studio**.
 Amati susunan file/directory yang terdapat pada starter code.

- Dalam project ini terdapat project Skor yang akan diterapkan dengan pendekatan
 menggunakan ViewModel. Project ini terdiri dari dua buah fragment yang saling
 bertukar data, untuk menjembatani hal ini dapat digunakan viewmodel. Sebagai
 referensi, silahkan anda buka tautan
 [ini](https://developer.android.com/topic/libraries/architecture/viewmodel.html#sharing)
 bagaimana caranya membagi data dengan viewmodel.

- Selain menggunakan viewmodel, pada praktikum kali ini juga akan digunakan
 LiveData. Silahkan buka berkas `SkorViewModel` kemudian perhatikan berkas
 tersebut.

- Sebuah ViewModel dibuat dengan konsep inheritance diturunkan dari class
 `ViewModel`.

- Pada project skor dibutuhkan dua informasi skor pada tim Home dan Away
 sehingga dibutuhkan dua buah atribut livedata. Tambahkan kode seperti yang ada
 di bawah.

  ```java title="ScoreViewModel.java"
  public class ScoreViewModel extends ViewModel {
    private final MutableLiveData<ArrayList<GoalScorer>> homeGoalScorerList =
      new MutableLiveData<>(new ArrayList<GoalScorer>());
    private final MutableLiveData<ArrayList<GoalScorer>> awayGoalScorerList =
      new MutableLiveData<>(new ArrayList<GoalScorer>());
  }
  ```

- Penggunaan ViewModel bertujuan juga untuk memisahkan logika dengan UI.
 Tambahkan logika untuk menampilkan nilai Skor masing-masing tim pada
 viewmodel.

  ```java title="ScoreViewModel.java"
  public class ScoreViewModel extends ViewModel {
    private final MutableLiveData<ArrayList<GoalScorer>> homeGoalScorerList =
      new MutableLiveData<>(new ArrayList<GoalScorer>());
    private final MutableLiveData<ArrayList<GoalScorer>> awayGoalScorerList =
      new MutableLiveData<>(new ArrayList<GoalScorer>());

    public int getHomeScore() {
      return homeGoalScorerList.getValue().size();
    }

    public int getAwayScore() {
      return awayGoalScorerList.getValue().size();
    }
  }
  ```

  > Penyimpanan nilai skor menggunakan LiveData sehingga dibutuhkan pengambilan
  > nilai menggunakan `getValue()` sebelum dihitung total `size()``-nya.

- Tambahkan logika untuk penambahan pencetak gol dengan kode sebagai berikut.
 Penambahan pencetak gol berdasarkan informasi tim yang mencetak gol.

  ```java title="ScoreViewModel.java"
  public void setGoalScorer(String team, GoalScorer goalScorer) {
		if (team.equals(ScoreFragment.HOME)) {
			homeGoalScorerList.getValue().add(goalScorer);
		} else {
			awayGoalScorerList.getValue().add(goalScorer);
		}
	}
  ```

- Selain pemisahan logika, dalam viewmodel juga dapat digunakan untuk pemisahan
 interaksi dengan pengguna. Tambahkan kode berikut untuk menambahkan interaksi
 pada tombol.

  ```java title="ScoreViewModel.java"
  public void onAddHomeClick(View view) {
		ScoreFragmentDirections.GoalScorerAction action =
      ScoreFragmentDirections.goalScorerAction(ScoreFragment.HOME);
		Navigation.findNavController(view).navigate(action);
	}

	public void onAddAwayClick(View view) {
		ScoreFragmentDirections.GoalScorerAction action =
      ScoreFragmentDirections.goalScorerAction(ScoreFragment.AWAY);
		Navigation.findNavController(view).navigate(action);
	}
  ```

- Viewmodel mempunyai lifecycle berdasarkan scope owner berupa activity atau
 fragment. Definisi scope dapat dilakukan pada saat proses instansiasi. Dalam
 kasus project skor, scope viewmodel menggunakan activity. Untuk mendapatkan
 nilai activity dapat digunakan method `requireActivity()`. Gambaran detil
 lifecycle pada viewmodel dapat terlihat pada gambar berikut.

 ![Lifecycle](https://developer.android.com/images/topic/libraries/architecture/viewmodel-lifecycle.png)

- Buka berkas `ScoreFragment.java` dan lakukan instansiasi viewmodel pada method
 `onCreateView()`.

  ```java title="ScoreFragment.java"
  viewModel = new ViewModelProvider(requireActivity()).get(ScoreViewModel.class);
  ```

- Buka berkas `GoalFragment.java` dan lakukan instansiasi viewmodel pada method
 `onCreateView()` dengan cara yang sama.

- Kemudian untuk menambahkan interaksi penambahan pencetak gol, silahkan
 tambahkan kode berikut pada method `onSaveClicked()`

  ```java title="GoalFragment.java" {5}
  public void onSaveClicked(View view) {
    Bundle bundle = new Bundle();
    bundle.putParcelable(ScoreFragment.SCORER_KEY, goalScorer);

    viewModel.setGoalScorer(requestKey, goalScorer);
    Navigation.findNavController(view).navigateUp();
  }
  ```

## Tantangan

Tampilkan data pemain beserta menit gol terjadi untuk masing-masing tim pada id
`text_home_scorer` dan `text_away_scorer` dengan menggunakan konsep viewmodel.

## Bahan Bacaan

1. https://developer.android.com/topic/libraries/architecture/viewmodel.html

