let tone;
let app = new Vue({

    el: '#app',
    data: {
        oct: [-3, -2, -1, 0, 1, 2, 3],
        currentOct: 0,
        keys: [{
                name: "C",
                jname: "ハ",
                transpose: 0
            },
            {
                name: "C#",
                jname: "嬰ハ",
                transpose: 1
            },
            {
                name: "D",
                jname: "ニ",
                transpose: 2
            },
            {
                name: "D#",
                jname: "嬰ニ",
                transpose: 3
            },
            {
                name: "E",
                jname: "ホ",
                transpose: 4
            },
            {
                name: "F",
                jname: "ヘ",
                transpose: 5
            },
            {
                name: "F#",
                jname: "嬰ヘ",
                transpose: 6
            },
            {
                name: "G",
                jname: "ト",
                transpose: 7
            },
            {
                name: "G#",
                jname: "嬰ト",
                transpose: 8
            },
            {
                name: "A",
                jname: "イ",
                transpose: 9
            },
            {
                name: "A#",
                jname: "嬰イ",
                transpose: 10
            },
            {
                name: "B",
                jname: "ロ",
                transpose: 11
            }
        ],
        currentKey: "C",
        nowPlay: "",
        scales: [{
                name: "アイオニアン(メジャー)",
                note: ["C4", "D4", "E4", "F4", "G4", "A4", "B4"],
                type: "チャーチモード"
            },
            {
                name: "ドリアン",
                note: ["C4", "D4", "Eb4", "F4", "G4", "A4", "Bb4"],
                type: "チャーチモード"
            },
            {
                name: "フリジアン",
                note: ["C4", "Db4", "Eb4", "F4", "G4", "Ab4", "Bb4"],
                type: "チャーチモード"
            },
            {
                name: "リディアン",
                note: ["C4", "D4", "E4", "F#4", "G4", "A4", "B4"],
                type: "チャーチモード"
            },
            {
                name: "ミクソリディアン",
                note: ["C4", "D4", "E4", "F4", "G4", "A4", "Bb4"],
                type: "チャーチモード"
            },
            {
                name: "エオリアン(ナチュラルマイナー)",
                note: ["C4", "D4", "Eb4", "F4", "G4", "Ab4", "Bb4"],
                type: "チャーチモード"
            },
            {
                name: "ロクリアン",
                note: ["C4", "Db4", "Eb4", "F4", "Gb4", "Ab4", "Bb4"],
                type: "チャーチモード"
            },
            {
                name: "ハーモニックマイナー",
                note: ["C4", "D4", "Eb4", "F4", "G4", "Ab4", "B4"],
                type: "ハーモニックマイナー"
            },
            {
                name: "ロクリアン♮6",
                note: ["C4", "Db4", "Eb4", "F4", "Gb4", "A4", "Bb4"],
                type: "ハーモニックマイナー"
            },
            {
                name: "アイオニアン♯5",
                note: ["C4", "D4", "E4", "F4", "G#4", "A4", "B4"],
                type: "ハーモニックマイナー"
            },
            {
                name: "ドリアン♯4",
                note: ["C4", "D4", "Eb4", "F#4", "G4", "A4", "Bb4"],
                type: "ハーモニックマイナー"
            },
            {
                name: "フリジアン・メジャー",
                note: ["C4", "Db4", "E4", "F4", "G4", "Ab4", "Bb4"],
                type: "ハーモニックマイナー"
            },
            {
                name: "スーパー・ロクリアン♭7",
                note: ["C4", "Db4", "Eb4", "Fb4", "Gb4", "Ab4", "Bbb4"],
                type: "ハーモニックマイナー"
            },
            {
                name: "メロディックマイナー",
                note: ["C4", "D4", "Eb4", "F4", "G4", "A4", "B4"],
                type: "メロディックマイナー"
            },
            {
                name: "スーパー・ドリアン",
                note: ["C4", "Db4", "Eb4", "F4", "G4", "A4", "Bb4"],
                type: "メロディックマイナー"
            },
            {
                name: "スーパー・フリジアン",
                note: ["C4", "D4", "E4", "F#4", "G#4", "A4", "B4"],
                type: "メロディックマイナー"
            },
            {
                name: "スーパー・リディアン",
                note: ["C4", "D4", "E4", "F#4", "G4", "A4", "Bb4"],
                type: "メロディックマイナー"
            },
            {
                name: "スーパー・ミクソリディアン",
                note: ["C4", "D4", "E4", "F4", "G4", "Ab4", "Bb4"],
                type: "メロディックマイナー"
            },
            {
                name: "スーパー・エオリアン",
                note: ["C4", "D4", "Eb4", "F4", "Gb4", "Ab4", "Bb4"],
                type: "メロディックマイナー"
            },
            {
                name: "スーパー・ロクリアン",
                note: ["C4", "Db4", "Eb4", "Fb4", "Gb4", "Ab4", "Bb4"],
                type: "メロディックマイナー"
            },
            {
                name: "ホールトーン",
                note: ["C4", "D4", "E4", "F#4", "Ab4", "Bb4"],
                type: "ホールトーン"
            },
            {
                name: "ディミニッシュト",
                note: ["C4", "D4", "Eb4", "F4", "Gb4", "G#4", "A4", "B4"],
                type: "ディミニッシュト"
            },
            {
                name: "ドミナント・ディミニッシュト",
                note: ["C4", "Db4", "Eb4", "Fb4", "Gb4", "G4", "A4", "Bb4"],
                type: "ディミニッシュト"
            },
            {
                name: "シンメトリック・オーギュメント",
                note: ["C4", "Eb4", "E4", "G4", "G#4", "B4"],
                type: "シンメトリック・オーギュメント"
            },
            {
                name: "マイナー・ペンタトニック",
                note: ["C4", "Eb4", "F4", "G4", "Bb4"],
                type: "ペンタトニック"
            },
            {
                name: "メジャー・ペンタトニック",
                note: ["C4", "D4", "E4", "G4", "A4"],
                type: "ペンタトニック"
            },
            {
                name: "ブルース",
                note: ["C4", "Eb4", "F4", "Gb4", "G4", "Bb4"],
                type: "ブルース"
            },
            {
                name: "メジャー・ブルース",
                note: ["C4", "D4", "Eb4", "E4", "G4", "A4"],
                type: "ブルース"
            },
            {
                name: "ハンガリー",
                note: ["C4", "D4", "Eb4", "F#4", "G4", "A4", "B4"],
                type: "民族音階"
            },
            {
                name: "ジプシー",
                note: ["C4", "Db4", "E4", "F4", "G4", "Ab4", "B4"],
                type: "民族音階"
            },
            {
                name: "スパニッシュ・フリジアン",
                note: ["C4", "Db4", "E4", "F4", "G4", "Ab4", "Bb4"],
                type: "ヨーロッパの音階"
            },
            {
                name: "8ノート・スパニッシュ",
                note: ["C4", "Db4", "Eb4", "E4", "F4", "Gb4", "Ab4", "Bb4"],
                type: "ヨーロッパの音階"
            },
            {
                name: "マールワー・タート",
                note: ["C4", "Db4", "E4", "F#4", "G4", "A4", "B4"],
                type: "インドの音階"
            },
            {
                name: "プールヴィー・タート",
                note: ["C4", "Db4", "E4", "F#4", "G4", "Ab4", "B4"],
                type: "インドの音階"
            },
            {
                name: "トーディー・タート",
                note: ["C4", "Db4", "Eb4", "F#4", "G4", "Ab4", "B4"],
                type: "インドの音階"
            },
            {
                name: "宮調式",
                note: ["C4", "D4", "E4", "G4", "A4"],
                type: "中国の音階"
            },
            {
                name: "商調式",
                note: ["C4", "D4", "F4", "G4", "Bb4"],
                type: "中国の音階"
            },
            {
                name: "角調式",
                note: ["C4", "Eb4", "F4", "Ab4", "Bb4"],
                type: "中国の音階"
            },
            {
                name: "徴調式",
                note: ["C4", "D4", "F4", "G4", "A4"],
                type: "中国の音階"
            },
            {
                name: "羽調式",
                note: ["C4", "Eb4", "F4", "G4", "Bb4"],
                type: "中国の音階"
            },
            {
                name: "呂旋法",
                note: ["C4", "D4", "E4", "G4", "A4"],
                type: "日本の音階"
            },
            {
                name: "律旋法",
                note: ["C4", "D4", "F4", "G4", "A4"],
                type: "日本の音階"
            },
            {
                name: "陽旋法",
                note: ["C4", "D4", "F4", "G4", "Bb4"],
                type: "日本の音階"
            },
            {
                name: "陰旋法",
                note: ["C4", "Db4", "F4", "G4", "Bb4"],
                type: "日本の音階"
            },
            {
                name: "琉球音階",
                note: ["C4", "E4", "F4", "G4", "B4"],
                type: "日本の音階"
            },
            {
                name: "ヨナ抜き長音階",
                note: ["C4", "D4", "E4", "G4", "A4"],
                type: "日本の音階"
            },
            {
                name: "ヨナ抜き短音階",
                note: ["C4", "D4", "Eb4", "G4", "Ab4"],
                type: "日本の音階"
            },
            {
                name: "ニロ抜き長音階",
                note: ["C4", "E4", "F4", "G4", "B4"],
                type: "日本の音階"
            },
            {
                name: "ニロ抜き短音階",
                note: ["C4", "Eb4", "F4", "G4", "Bb4"],
                type: "日本の音階"
            },
            {
                name: "雲井音階",
                note: ["C4", "D4", "Eb4", "G4", "A4"],
                type: "日本の音階"
            },
            {
                name: "岩戸音階",
                note: ["C4", "Db4", "F4", "Gb4", "Bb4"],
                type: "日本の音階"
            }
        ]

    },
    mounted: function () {

        tone = new Tone.Synth({
            oscillator: {
                type: "sine"
            }
        }).toMaster();

    },
    computed: {
        currentList: function () {

            //マスターデータを基準に移調するのでコピーをとる
            let masterList = this.scales;
            let tempList = JSON.parse(JSON.stringify(this.scales));

            let currentOct = this.currentOct;
            let currentKey = this.currentKey;

            for (let i = 0; i < masterList.length; i++) {

                let masterNoteArray = masterList[i].note;

                tempList[i].note = this.getTransposedNoteArray(masterNoteArray, currentOct, currentKey);
                tempList[i].dispNote = tempList[i].note.join(" ");
            }

            let newList = this.changeListFormat(tempList);

            return newList;
        }
    },
    filters: {

        keyNameFormat: function (val) {

            let name = val.replace("#", "s");

            return name;
        }
    },
    methods: {
        getTransposedNoteArray: function (masterNoteArray, currentOct, currentKey) {

            //Arrayのコピー
            let result = masterNoteArray.concat();

            let transpose = 0;
            let keys = this.keys;
            let i = 0;


            //transpose値を確定
            for (i = 0; i < keys.length; i++) {

                if (currentKey == keys[i].name) {

                    transpose = keys[i].transpose;
                }
            }
            //オクターブを加算
            transpose += (12 * currentOct);

            //transeposeする
            for (i = 0; i < masterNoteArray.length; i++) {

                let note = masterNoteArray[i];
                let tranceposedNote = new Tone.Frequency(note).transpose(transpose).toNote();
                result[i] = tranceposedNote;
            }

            return result;

        },
        changeListFormat: function (tempList) {


            let i = 0;
            //フィルタのkeyを作成
            let filterKey = [];
            let past = "";
            let now = "";
            for (i = 0; i < tempList.length; i++) {

                now = tempList[i].type;
                if (past != now) {
                    filterKey.push(now);
                }
                past = now;
            }

            //新しい形式のテンプレートの準備
            let newList = [];
            let template = {
                type: "",
                scales: []
            };

            //フィルタをかけて必要なデータを取り出し
            for (i = 0; i < filterKey.length; i++) {

                let filteredArray = tempList.filter(item => filterKey[i] == item.type);

                //新しい形式に整形
                let myTemplate = Object.assign({}, template);
                myTemplate.type = filterKey[i];
                myTemplate.scales = filteredArray.concat(); //COPY
                newList.push(myTemplate);
            }

            return newList;

        },
        play: function (scale, $event) {

            if ($event) {

                this.nowPlay = this.currentKey + scale.name;

                Tone.Transport.stop();
                Tone.Transport.cancel();

                let play = new Tone.Sequence(this.soundset, scale.note).start(0, 0);
                play.loop = 0;
                play.loopEnd = 1;
                Tone.Transport.start();
            }
        },
        soundset(time, note) {

            tone.triggerAttackRelease(note, '4n', time);
        }

    }
});