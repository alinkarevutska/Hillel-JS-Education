// Задача: 
// Создать класс Time, который содержит:
// статические геттеры: date, day, month, monthNames.
// геттер date должен возвращать текущую дату – new Date()
// геттер day должен возвращать текущий день – getUTCDate()
// геттер month должен возвращать номер текущего месяц – getMonth()
// геттер monthNames должен возвращать массив с перечнем месяцев – [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];
// статический метод monthName, который возвращает:
// название текущего месяца, если при вызове метода номер месяца НЕ передан. Пример: Time.monthName() должен вернуть November.
// название месяца, номер которого передан при вызове метода. Пример: Time.monthName(3) должен вернуть April.
// Создать класс Astrological, который наследуется от класса Time и содержит:
// статический метод astrologicalSign, который принимает на вход два параметра: day – день; month – название месяца. Пример: Astrological.astrologicalSign(29,`September`); Метод возвращает:
// название знака зодиака, в зависимости от переданного дня и названия месяца. Пример: Astrological.astrologicalSign(29,`September`) => Libra.
// название текущего знака зодиака, если метод вызван без параметров day и month. Astrological.astrologicalSign() => Sagittarius.
// Создать класс Human, который наследуется от класса Astrological и содержит:
// метод astrologicalSign, который возвращает строку с информацией о знаке зодиака юзера, в контексте которого вызывается. Пример: LarryPage.astrologicalSign() => `Larry Page is Aries`.
// Каждый объект в заданном массиве users делаем экземпляром класса Human и в контексте каждого из юзеров вызываем метод astrologicalSign.

const astrologicalSigns = {
    Aries: {
      startDate: {
        month: `March`,
        day: 21
      },
      endDate: {
        month: `April`,
        day: 20
      }
    },
    Taurus: {
      startDate: {
        month: `April`,
        day: 21
      },
      endDate: {
        month: `May`,
        day: 21
      }
    },
    Gemini: {
      startDate: {
        month: `May`,
        day: 22
      },
      endDate: {
        month: `June`,
        day: 21
      }
    },
    Cancer: {
      startDate: {
        month: `June`,
        day: 22
      },
      endDate: {
        month: `July`,
        day: 22
      }
    },
    Leo: {
      startDate: {
        month: `July`,
        day: 23
      },
      endDate: {
        month: `August`,
        day: 21
      }
    },
    Virgo: {
      startDate: {
        month: `August`,
        day: 22
      },
      endDate: {
        month: `September`,
        day: 23
      }
    },
    Libra: {
      startDate: {
        month: `September`,
        day: 24
      },
      endDate: {
        month: `October`,
        day: 23
      }
    },
    Scorpio: {
      startDate: {
        month: `October`,
        day: 24
      },
      endDate: {
        month: `November`,
        day: 22
      }
    },
    Sagittarius: {
      startDate: {
        month: `November`,
        day: 23
      },
      endDate: {
        month: `December`,
        day: 22
      }
    },
    Capricorn: {
      startDate: {
        month: `December`,
        day: 23
      },
      endDate: {
        month: `January`,
        day: 20
      }
    },
    Aquarius: {
      startDate: {
        month: `January`,
        day: 21
      },
      endDate: {
        month: `February`,
        day: 19
      }
    },
    Pisces: {
      startDate: {
        month: `February`,
        day: 20
      },
      endDate: {
        month: `March`,
        day: 20
      }
    }
};

const users = [
    {
      name: 'Larry Page',
      dayOfBirth: 26,
      monthOfBirth: `March`
    },
    {
      name: 'Bill Gates',
      dayOfBirth: 28,
      monthOfBirth: `October`
    },
    {
      name: 'Mark Zuckerberg',
      dayOfBirth: 14,
      monthOfBirth: `May`
    }
]; 

const months = [
  `January`, 
  `February`, 
  `March`, 
  `April`, 
  `May`, 
  `June`, 
  `July`, 
  `August`, 
  `September`, 
  `October`, 
  `November`, 
  `December`
];

class Time {
    static get date() {
        return new Date();
    }

    static get day() {
        return Time.date.getUTCDate();
    }

    static get month() {
        return Time.date.getMonth();
    }

    static get monthNames() {
         return months;
    }

    static monthName = value => value ? Time.monthNames[value] : Time.monthNames[Time.month];
}

// console.log(Time.day()) // 29
// console.log(Time.month()) // 3
// console.log(Time.monthName()) // April

class Astrological extends Time {
    static astrologicalSign = (day=Time.day, month=Time.monthName()) => {
      
      let obj = astrologicalSigns;
   
      for (let key in obj) {
        let startDateMonth = obj[key].startDate.month,
            endDateMonth = obj[key].endDate.month,
            startDateDay = obj[key].startDate.day,
            endDateDay = obj[key].endDate.day;
        
        if (
            (month === startDateMonth && day >= startDateDay) || 
            (month === endDateMonth && day <= endDateDay)
        ) {
          return key;
        }
      } 
    }
}

// console.log(Astrological.astrologicalSign(13, `November`)); // Scorpio
// console.log(Astrological.astrologicalSign()); // Taurus

class Human extends Astrological {
  constructor(object){
    super();
    for(let key in object){
      this[key] = object[key];
    }
  }

  astrologicalSign() {
    return `${this.name} is ${Astrological.astrologicalSign(this.dayOfBirth, this.monthOfBirth)}`
  }
}

users
  .map(user => new Human(user))
  .forEach(user => console.log(user.astrologicalSign()));

// Larry Page is Aries
// Bill Gates is Scorpio
// Mark Zuckerberg is Taurus

