import { useState, useEffect, useRef, useLayoutEffect } from "react";
import moment from "moment";
import "./calendar.css";
import { useSelector, useDispatch } from "react-redux";
import { selectDay } from "../redux/slices/calendarSlice";
import useWidth from "../../hooks/useWidth";
import useHeight from "../../hooks/useHeight";
import styled from "styled-components";
import { RootState } from "../redux/store";

const CalendarTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: clamp(600px, 100%, 900px);
  height: 100px;
  background-color: white;
  border-radius: 5px;
  padding: 0 10px 0 10px;
  box-sizing: border-box;
`;

const CalendarContainer = styled.div`
  margin-top: 20px;
  width: clamp(600px, 100%, 900px);
  height: clamp(
    ${({ screenHeight }) => {
      return `${screenHeight}px`;
    }},
    ${({ height }) => {
      return `${height}px`;
    }},
    70vh
  );
  background-color: white;
  border-radius: 5px;
`;

const CalendarHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50%;
  align-items: center;
  justify-content: center;
`;

const MonthYear = styled.h2`
  font-size: 1.2em;
  text-align: center;
  min-width: 15ch;
`;

const WeekNav = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  height: 50%;
`;

const WeekDayContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
const WeekDay = styled.span`
  align-self: flex-end;
`;

const CalendarHeaderLineBreak = styled.hr`
  margin: 0;
  width: 100%;
  border: none;
  border-top: 1px solid #e0e0e0;
  color: #6e6d7a;
`;

const Calendar = (props) => {
  const [dateContext, setDateContext] = useState(moment());
  const [today, setToday] = useState(moment());
  const [showMonthPopup, setShowMonthPopup] = useState(false);
  const [showYearPopup, setShowYearPopup] = useState(false);
  const [days, setDays] = useState(null);
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [currentWeekdays, setCurrentWeekDays] = useState(null);
  const style = props.style || {};
  const meals = useSelector((state: RootState) => state.calendar.calendarMeals);
  const selectedDay = useSelector(
    (state: RootState) => state.calendar.selectedDay
  );
  const dispatch = useDispatch();
  const divRef = useRef<HTMLDivElement>(null);
  const divRef2 = useRef<HTMLDivElement>(null);
  const [calendarWidth, setCalendarWidth] = useState(1000);
  const [calendarHeight, setCalendarHeight] = useState(1000);
  const width = useWidth();
  const height = useHeight();

  useLayoutEffect(() => {
    if (divRef.current) {
      setCalendarWidth(divRef.current.clientWidth);
    }
  }, [width]);

  useLayoutEffect(() => {
    if (divRef2.current) {
      setCalendarHeight(divRef.current.clientHeight);
    }
  }, [height]);

  useLayoutEffect(() => {
    setDays(calculateSpots());
    let daysInWeek = weekdaysShort.map((day) => {
      return (
        <td key={day} className="week-day">
          {day}
        </td>
      );
    });
    setCurrentWeekDays(daysInWeek);
  }, []);

  useEffect(() => {
    console.log(selectedDay);
    setDays(calculateSpots());
  }, [selectedDay]);

  useEffect(() => {
    setDays(calculateSpots());
  }, [dateContext]);

  useEffect(() => {
    setDays(calculateSpots());
  }, [meals]);

  const weekdays = moment.weekdays();
  const weekdaysShort = moment.weekdaysShort();
  const months = moment.months();

  const year = () => {
    return dateContext.format("Y");
  };

  const month = () => {
    return dateContext.format("MMMM");
  };
  const daysInMonth = () => {
    return dateContext.daysInMonth();
  };
  const currentDate = () => {
    return dateContext.get("date");
  };
  const currentDay = () => {
    return Number(dateContext.format("D"));
  };

  const firstDayOfMonth = (): number => {
    let firstDay = Number(moment(dateContext).startOf("month").format("d")); // Day of week 0...1..5...6
    return firstDay;
  };

  const setMonth = (month) => {
    let monthNo = months.indexOf(month);
    let newDateContext = Object.assign({}, dateContext);
    newDateContext = moment(dateContext).set("month", monthNo);
    setDateContext(newDateContext);
  };

  const nextMonth = () => {
    let newDateContext = Object.assign({}, dateContext);
    newDateContext = moment(dateContext).add(1, "month");
    setDateContext(newDateContext);
  };

  const prevMonth = () => {
    let newDateContext = Object.assign({}, dateContext);
    newDateContext = moment(dateContext).subtract(1, "month");
    setDateContext(newDateContext);
  };

  const onSelectChange = (e, data) => {
    setMonth(data);
    props.onMonthChange && props.onMonthChange();
  };
  const SelectList = (props) => {
    let popup = props.data.map((data) => {
      return (
        <div key={data}>
          <a
            href="#"
            onClick={(e) => {
              onSelectChange(e, data);
            }}
          >
            {data}
          </a>
        </div>
      );
    });

    return <div className="month-popup">{popup}</div>;
  };

  const onChangeMonth = (e, month) => {
    setShowMonthPopup(!showMonthPopup);
  };

  const getMonthFromString = (mon) => {
    var d = Date.parse(mon + "1, 2012");
    if (!isNaN(d)) {
      let month = (new Date(d).getMonth() + 1).toString();
      return month.length == 2 ? month : "0" + month;
    }
    return -1;
  };

  const MonthNav = () => {
    return (
      <span
        className="label-month"
        onClick={(e) => {
          onChangeMonth(e, month());
        }}
      >
        {month()}
        {showMonthPopup && <SelectList data={months} />}
      </span>
    );
  };

  const showYearEditor = () => {
    setShowYearPopup(!showYearPopup);
  };

  const setYear = (year) => {
    let newDateContext = Object.assign({}, dateContext);
    newDateContext = moment(dateContext).set("year", year);
    setDateContext(newDateContext);
  };

  const onYearChange = (e) => {
    setDateContext(moment(dateContext).set("year", e.target.value));
    setShowYearPopup(false);
  };

  const onKeyUpYear = (e) => {
    if (e.which === 13 || e.which === 27) {
      setYear(e.target.value);
      setShowYearPopup(false);
    }
  };

  const YearNav = () => {
    return (
      <span
        className="label-year"
        onClick={(e) => {
          showYearEditor();
        }}
      >
        {year()}
        {showYearPopup && (
          <input
            defaultValue={year()}
            className="editor-year"
            type="number"
            onKeyUp={(e) => {
              if (e.which === 13 || e.keyCode === 13) {
                onYearChange(e);
              }
            }}
            onBlur={(e) => {
              onYearChange(e);
            }}
            autoFocus
          />
        )}
      </span>
    );
  };

  const onDayClick = (e, day) => {
    dispatch(selectDay({ date: e.target.children[0].id }));
    console.log({ weekdays });
  };

  const calculateSpots = () => {
    let currentMonth = getMonthFromString(month());
    let blanks = [];
    for (let i = 0; i < firstDayOfMonth(); i++) {
      let className = "day";
      // (i == this.currentDay() ? "day current-day": "day");
      let selectedClass = `${i}` === selectedDay ? " selected-day " : "";
      blanks.push(
        <td key={i} className={className + selectedClass}>
          <span className="blank">{`${31 - ~~i}`}</span>
          <div className="meal-name">
            {/* <p>{this.props.meals[i] ? this.props.meals[i].mealName: ''}</p> */}
          </div>
        </td>
      );
    }
    blanks = blanks.reverse();

    let daysInThisMonth = [];
    for (let d = 1; d <= daysInMonth(); d++) {
      let day = d < 10 ? "0" + d.toString() : d;
      let currentDate = `${year()}-${currentMonth}-${day}`;
      interface DayMeal {
        title?: string;
      }
      let dayMeal: DayMeal = {};
      meals.forEach(({ date, meal }) => {
        if (currentDate == date) {
          dayMeal = meal;
        }
      });
      let className = d == currentDay() ? "day current-day" : "day";
      let selectedClass = currentDate == selectedDay ? " selected-day " : "";
      daysInThisMonth.push(
        <td
          key={d + 10}
          className={className + selectedClass}
          onClick={(e) => {
            onDayClick(e, d);
          }}
        >
          <span className="day-num" id={currentDate}>
            {d}
          </span>
          <div className="meal-name">
            <p>{dayMeal.title ? dayMeal.title : ""}</p>
          </div>
        </td>
      );
    }

    var totalSlots = [...blanks, ...daysInThisMonth];
    let spaces = 42 - totalSlots.length;
    let endBlanks = [];
    for (let i = 1; i <= spaces; i++) {
      let className = "day";
      // (i == this.currentDay() ? "day current-day": "day");
      let selectedClass = `${i}` == selectedDay ? " selected-day " : "";
      endBlanks.push(
        <td key={i} className={className + selectedClass}>
          <span
            className="blank"
            onClick={(e) => {
              onDayClick(e, i);
            }}
          >{`${i}`}</span>
          {/* <div className="meal-name">
                    <p>{this.props.meals[i] ? this.props.meals[i].mealName: ''}</p>
                </div> */}
        </td>
      );
    }
    totalSlots = [...totalSlots, ...endBlanks];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row);
      } else {
        let insertRow = cells.slice();
        rows.push(insertRow);
        cells = [];
        cells.push(row);
      }
      if (i === totalSlots.length - 1) {
        let insertRow = cells.slice();
        rows.push(insertRow);
      }
    });

    return rows.map((d, i) => {
      if (d.length > 0) {
        return <tr key={i * 100}>{d}</tr>;
      }
    });
  };

  let filterMeals = () => {
    let starting = `${year()}${getMonthFromString(month())}`;
    let filteredMeals = meals.filter(({ date }) => date.startsWith(starting));
    setFilteredMeals(filteredMeals);
  };

  return (
    <>
      <CalendarTopContainer>
        <CalendarHeaderContainer>
          <i className="prev fa fa-fw fa-chevron-left" onClick={prevMonth} />
          <MonthYear>
            {`${month()} `}
            {year()}
          </MonthYear>
          <i className="next fa fa-fw fa-chevron-right" onClick={nextMonth} />
        </CalendarHeaderContainer>
        <CalendarHeaderLineBreak></CalendarHeaderLineBreak>
        <WeekNav>
          {weekdaysShort.map((day, i) => {
            return (
              <WeekDayContainer key={i}>
                <WeekDay>{day}</WeekDay>
              </WeekDayContainer>
            );
          })}
        </WeekNav>
      </CalendarTopContainer>
      <CalendarContainer
        ref={divRef}
        height={calendarWidth / 1.4}
        screenHeight={calendarWidth / 1.7}
      >
        <div className="calendar-container">
          <table className="calendar">
            <tbody>{days}</tbody>
          </table>
        </div>
      </CalendarContainer>
    </>
  );
};

export default Calendar;
