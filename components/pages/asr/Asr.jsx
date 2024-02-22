import React from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
} from "react-native";
import SoundArea from "../../atoms/players/SoundArea";
import HighlightText from "@sanar/react-native-highlight-text";

export const Asr = () => {
  const audioTrack = require("../../../assets/audio/Asr.mp3");
  const data = require("../../../assets/highlightedWords/highlighted.json");
  const asrText = `Аср намаздын парзы окулуп, салам берилгенден кийин:

"Аллоохумма антас-салааму ваминкас - салаам, табаарокта йаа зал-жалаали вал икроом" деп айтылат.

Анан колдор көтөрүлүп, алакандар жайылып 'Солаатан тунжина' дубасы окулат:

"Аллоохумма солли 'алаа саййидинаа Мухаммадин ва 'алаа аали саййидинаа Мухаммад, солаатан тунжинаа бихаа мин жамии'ил ахваали вал аафаат.('аафаат' деп айтып жатканда алакан төмөн, бүткөндө өйдө каратылат.) Ва такдий ланаа бихаа жамии'ал хаажаат, ва тутоххирунаа бихаа мин жами'ис саййи-аат, ва тарфаунаа бихаа 'индака аа'лад дарожаат, ва тубаллигунаа бихаа аксоль гоойаат, мин жамии ил хойрооти фил хайаати ва баадал мамаат, аамиин,йа Мужибад да аваат, вал хамду лиллаахи Роббил "ааламиин" деп алакандар бетке сүрүлөт. 

Бул дубадан кийин тасбихат улантылат:

«Субхааналлоохи вал хамду лиллаахи ва лаа илааха иллаллооху валлооху акбар, ва лаа хавла ва лаа куввата иллаа биллаахил 'алиййил 'азыйм" деп айтылат жана 'Аятал Курси' окулат:

Бисмиллаахир Рахмаанир Рахиим.

«Аллооху лаа илааха иллаа хувал хаййул каййуум, лаа та-хузухуу синатун валаа наум, лаху маа фиссамааваати вамаа фил ард, ман залазий йаашфау индахуу иллаа би-изних, йаа' ламу маа байна айдийхим вамаа холфахум валаа йухийтууна би шай-ин мин 'илмихии иллаа бимаа шаа-а, васи'а курсиййухус самааваати вал арди, валаа йа-уудуху хифзухума ва хувал' алиййул азыйм»

Намаз тасбихтери айтылат:

Субхааналлоох (33 жолу)

Алхамдулиллаах (33 жолу)

Аллооху акбар (33 жолу)

«Лаа илааха иллаллооху вахдахуу лаа шарийка лах, лахул мулку ва лахул хамду йухйии ва йумиит, ва хува хаййун лаа ямуут, биадихил хойр, ва хува 'алаа кулли шай-ин кодиир ва илайхил масыйр» деп айтылып дуба кылынат.

Дубадан кийинки тасбихат улантылат:

Фалам аннаху (1 жолу)

Лаа илааха иллаллоох

(33 жолу окулат. Каалагандар багымдат жана куптан намаздардан кийин 100 жолу окуса болот.)

«Мухаммадун Расуулуллоохи соллаллооху та'аалаа 'алайхи ва саллам» (Андан сон):

«Лаа илааха иллаллоох ал маликул хаккул мубиин, Мухаммадун расуулуллоохис соодикул ва'дил амиин».

(Багымдат намазда гана 10 жолу окулат.)

Тасбихаттагы салаату-саламдар окулат:

Бисмиллаахир Рохмаанир Рахиим.

* Инналлооха ва малаа-икатахуу усоллууна 'алан набий, йаа аййухаллазийна аамануу соллууалайхи васаллимуу таслиймаа, лаббайк!.

* Аллоохумма солли 'алаа саййидинаа Мухаммадин ва 'алаа аали саййидинаа Мухаммад, би 'адади кулли даа-ин ва даваа-ин ва баарик васаллим 'алайхи ва 'алайхим касийроо.

* Аллоохумма солли 'алаа саййидинаа Мухаммадин ва 'алаа аали саййидинаа Мухаммад, би 'адади кулли даа-ин ва даваа-ин ва баарик васаллим 'алайхи ва алайхим касийроо.

* Аллоохумма солли 'алаа саййидинаа Мухаммадин ва 'алаа аали саййидинаа Мухаммад, би адади кулли даа-ин ва даваа-ин ва баарик васаллим 'алайхи ва алайхим касийрон касийроо.

* Солли васаллим йаа Робби 'алаа хабийбика Мухаммадин ва 'алаа жамии'ил анбийаа-и вал мурсалиин, ва 'алаа аали куллин ва сохби куллин ажмаин. Аамиин, вал хамду лиллаахи Роббил 'ааламиин.

* Алфу алфи солаатин ва алфу алфи салаамин 'алайка йаа расуулаллоох.

* Алфу алфи солаатин ва алфу алфи салаамин 'алайка йаа хабиибаллоох.

* Алфу алфи солаатин ва алфу алфи салаамин 'алайка йаа амиина вахйиллаах.

* Аллоохумма солли васаллим ва баарик, алаа саййидинаа Мухаммадин ва 'алаа аалихи ва асхаабих, би 'адади авроокил ашжаари ва амваажил бихаари ва катороотил амтоор, вагфир ланаа вархамнаа валтуф бинаа ва би устаазинаа ва ваалидайнаа ва битолабати росаа-илин нуурис-соодикиин, йаа илааханаа би кулли солаатин минхаа, ашхаду ан лаа илааха иллаллоох, ва ашхаду анна Мухаммадан Расуулуллоохи соллаллооху та'аала 'алайхи ва саллам.

Бисмиллаахир Рахмаанир Рахиим.

* Субхаанака йаа Аллаах та'аалайта йаа Рохмаан ажирнаа минан наар би 'афвика йаа Рохмаан.

* Субхаанака йа Рахиим та'аалайта йаа Кариим ажирнаа минан наар би 'афика йаа Рохмаан.

* Субхаанака йаа Хамиид тааалайта йаа Хакиим ажирнаа минан наар би 'афвика йаа Рохмаан.

* Субхаанака йаа Мажиид тааалайта йаа Малик ажирнаа минан наар би 'афвика Йаа Рохмаан.

* Субхаанака йаа Кудуус та'аалайта йаа Салаам ажирнаа минан наар би 'афвика йаа Рохмаан.

* Субхаанака йаа Му-мин тааалайта йаа Мухаймин ажирнаа минан наар би 'афвика йаа Рохмаан.

* Субхаанака йаа 'Азииз тааалайта йаа Жаббаар ажирнаа минан наар би 'афвика йаа Рохмаан.

* Субхаанака йаа Мутакаббир та'аалайта йаа Хоолик ажирнаа минан наар би 'афвика йаа Рохмаан.

* Субхаанака йа Аввал тааалайта йаа Аахир ажирнаа минан наар би 'афвика йаа Рохмаан.

* Субхаанака йа Зоохир та аалайта йаа Баатын ажирнаа минан наар би 'афвика йаа Рохмаан.

* Субхаанака йаа Баари та'аалайта йаа Мусаввир ажирнаа минан наар би 'афвика йаа Рохмаан.

* Субхаанака йаа Таввааб та'аалайта йаа Ваххааб ажирнаа минан наар би 'афвика йаа Рохмаан.

* Субхаанака йаа Баа'ис та аалайта йаа Ваарис ажирнаа минан наар би афвика иаа Рохмаан.

* Субхаанака йаа Кодиим та'аалайта йаа Мукиим ажирнаа минан наар би 'афвика йаа Рохмаан.

* Субхаанака йаа Фард та'аалайта йаа Витр ажирнаа минан наар би 'афвика йаа Рохмаан.

* Субхаанака йаа Нуур та аалайта йаа Саттаар ажирнаа минан наар би афвика иаа Рохмаан.

* Субхаанака йаа алиил тааалайта йаа Жамиил ажирнаа минан наар би 'афвика йаа Рохмаан.

* Субхаанака йа Коохир та'аалайта йаа Коодир ажирнаа минан наар би 'афвика йаа Рохмаан.

* Субхаанака йаа Малиик тааалайта йаа Муктадир ажирнаа минан наар би 'афвика йаа Рохмаан.

* Субхаанака йаа 'Алиим та'аалайта йаа' Аллаам ажирнаа минан наар би 'афвика йаа Рохмаан.

* Субхаанака йаа 'Азыйм та'аалайта йаа Гофуур ажирнаа минан наар би 'афвика йаа Рохмаан.

* Субхаанака йаа Халиим тааалайта йаа Вадууд ажирнаа минан наар би 'афвика йаа Рохмаан.

* Субхаанака йаа Шахиид та'аалайта йаа Шаахид ажирнаа минан наар би 'афвика йаа Рохмаан.

* Субхаанака йа Кабиир та'аалайта йаа Мутааал ажирнаа минан наар би 'афвика йаа Рохмаан.

* Субхаанака йаа Нуур та аалайта йаа Латыйф ажирнаа минан наар би 'афвика йаа Рохмаан.

* Субхаанака йаа Самии' та'аалайта йаа Кафиил ажирнаа минан наар би 'афвика йаа Рохмаан.

* Субхаанака йаа Корииб та аалайта йаа Басыйр ажирнаа минан наар би 'афвика йаа Рохмаан.

* Субхаанака йаа Хакк та'аалайта йаа Мубиин ажирнаа минан наар би 'афвика йаа Рохмаан.

* Субхаанака йаа Ро-ууф та'аалайта йаа Рахиим ажирнаа минан наар би 'афвика йаа Рохмаан.

* Субхаанака йаа Тоохир та аалайта иаа Мутоххир ажирнаа минан наар би 'афика йаа Рохмаан.

* Субхаанака йаа Мужаммил тааалайта йаа Муфаддыл ажирнаа минан наар би 'афвика йаа Рохмаан.

* Субхаанака йаа Музхир тааалайта йаа Мун'им ажирнаа минан наар би 'афвика йаа Рохмаан.

* Субхаанака йаа Даййаан тааалайта йаа Султоон ажирнаа минан наар би 'афика йаа Рохмаан.

* Субхаанака йаа Ханнаан тааалайта йаа Маннаан ажирнаа минан наар би 'афвика йаа Рохмаан.

* Субхаанака йа Ахад тааалайта йаа Сомад ажирнаа минан наар би 'афвика йаа Рохмаан.

* Субхаанака йаа Хайй та аалайта йаа Каййуум ажирнаа минан наар би 'афвика йаа Рохмаан.

* Субхаанака йаа 'Адл та'аалайта йаа Хакам ажирнаа минан наар би 'афвика йаа Рохмаан.

* Субхаанака йаа Фард та'аалайта йаа Куддуус ажирнаа минан наар би 'афвика йаа Рохмаан.

* Субхаанака йаа 'Адл та'аалайта йаа Хакам ажирнаа минан наар би 'афвика йаа Рохмаан.

* Субхаанака йаа Фард та'аалайта йаа Куддуус ажирнаа минан наар би 'афвика йаа Рохмаан.

* Субхаанака аахиййан шароохиййан та'аалайта лаа илааха иллаа анта ажирнаа ва ажир устаазанаа ва ваалидайнаа ва ихваананаа ва аховаатанаа ва толабата росаа-илин нуури ва руфакоо-анаа ва акрибаа-анаа ва ахбаабанал мумининал мухлисыйна минан наар,

(Алакандар төмөн каратылат)

ва мин купли наар, вахфазнаа мин шаррин нафси ваш шайтоон ва мин шаррил-жинни вал-инсаан ва мин шаррил бид'ати вад долаалати вал-илхаади ват-тугйаан.

(Алакандар кайра өйдө каратылат)

Би 'афвика йаа Мужиир, би фадлика йаа Гоффаар, би рахматика йаа архамар роохимиин. Аллоохумма адхилнал жанната ма'ал аброор, би шафаа'ати набиййикал мухтаар. Аамиин, вал хамду лиллаахи Роббил 'ааламиин.

«Набаа» суресунун  31-40-аяттары окулат:

Бисмиллаахир Рахмаанир Рахиим.

«Инна лил муттакийна мафаазан хадаа-ико ва а'наабаа, ва каваа иба атрообаа, ва каа-сан дихаакоо. Лаа йасма ууна фийхаа лагвав валаа киззаабаа, жазаа-ан мин Роббика 'атоо-ан хисаабаа Роббис самааваати вал арди вамаа байнахумар Рохмаани лаа йаамликууна минху хитообаа,Иаума якуумур рууху вал малаа-икату соффаа, лаа ятакалламууна иллаа ман азина лахур Рохмаану ва коола соваабаа Зааликал йаумул хакк, фаман шаа-аттахоза илаа Роббихии ма-аабаа. Иннаа анзарнаакум азаабан Кориибаа, йаума йаанзурул мар-у маа коддамат ядааху ва якуулул каафиру йаа лайтании кунту турообаа».

СодакАллоохул 'Азыйм.

`;
  return (
    <View style={styles.asr}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.text}>
            <HighlightText
              highlightStyle={{ color: "yellow" }}
              searchWords={data.highlighted}
              textToHighlight={asrText}
            />
          </Text>
        </View>
      </ScrollView>
      <View>
        <SoundArea audioTrack={audioTrack} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  asr: {
    width: "100%",
    height: "100%",
    backgroundColor: "#320548",
  },
  container: {
    paddingHorizontal: 12,
    paddingVertical: 20,
    paddingBottom: 100,
  },
  text: {
    fontSize: 16,
    fontFamily: "Medium",
    color: 'white',
    lineHeight: 22
  },
});