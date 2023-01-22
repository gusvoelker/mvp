import React, { useState, useEffect } from "react";
import moment from "moment";
import "./calendar.css";
import { useSelector, useDispatch } from "react-redux";
import { selectDay } from "../redux/slices/calendarSlice";
import styled from "styled-components";

const Calendar = (props) => {
  const CalendarTopContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100px;
    background-color: white;
    border-radius: 5px;
  `;

  const CalendarContainer = styled.div`
    margin-top: 30px;
    width: 100%;
    height: 600px;
    background-color: white;
    border-radius: 5px;
  `;

  const [dateContext, setDateContext] = useState(moment());
  const [today, setToday] = useState(moment());
  const [showMonthPopup, setShowMonthPopup] = useState(false);
  const [showYearPopup, setShowYearPopup] = useState(false);
  const [days, setDays] = useState(null);
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [currentWeekdays, setCurrentWeekDays] = useState(null);
  const style = props.style || {};
  const meals = useSelector((state) => state.calendar.calendarMeals);
  const selectedDay = useSelector((state) => state.calendar.selectedDay);
  const dispatch = useDispatch();

  useEffect(() => {
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
    return dateContext.format("D");
  };

  const firstDayOfMonth = () => {
    let firstDay = moment(dateContext).startOf("month").format("d"); // Day of week 0...1..5...6
    return firstDay;
  };

  const setMonth = (month) => {
    let monthNo = months.indexOf(month);
    let dateContext = Object.assign({}, dateContext);
    dateContext = moment(dateContext).set("month", monthNo);
    setDateContext(dateContext);
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
    let dateContext = Object.assign({}, dateContext);
    dateContext = moment(dateContext).set("year", year);
    setDateContext(dateContext);
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
      let selectedClass = i == selectedDay ? " selected-day " : "";
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
      let currentDate = `${year()}${currentMonth}${day}`;
      let dayMeal = {};
      meals.forEach(({ date, meal }) => {
        if (currentDate == date) {
          dayMeal = meal;
        }
      });
      let className = d == currentDay() ? "day current-day" : "day";
      let selectedClass = ~~currentDate == selectedDay ? " selected-day " : "";
      daysInThisMonth.push(
        <td
          key={~~currentDate}
          className={className + selectedClass}
          onClick={(e) => {
            onDayClick(e, d);
          }}
        >
          <span className="day-num" id={~~currentDate}>
            {d}
          </span>
          <div className="meal-name">
            <p>{dayMeal.mealName ? dayMeal.mealName : ""}</p>
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
      let selectedClass = i == selectedDay ? " selected-day " : "";
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
        <WeekNav>
          {weekdaysShort.map((day) => {
            return (
              <WeekDayContainer>
                <WeekDay>{day}</WeekDay>
              </WeekDayContainer>
            );
          })}
        </WeekNav>
      </CalendarTopContainer>
      <CalendarContainer>
        <div className="calendar-container" style={style}>
          <table className="calendar">
            <tbody>{days}</tbody>
          </table>
        </div>
      </CalendarContainer>
    </>
  );
};

export default Calendar;
