import React from "react";
import moment from "moment";
import "./calendar.css";

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateContext: moment(),
      today: moment(),
      showMonthPopup: false,
      showYearPopup: false,
      selectedDay: null,
      days: null,
      meals: null,
      filterMeals: [],
    };
    this.style = props.style || {};
  }

  weekdays = moment.weekdays();
  weekdaysShort = moment.weekdaysShort();
  months = moment.months();

  year = () => {
    return this.state.dateContext.format("Y");
  };

  month = () => {
    return this.state.dateContext.format("MMMM");
  };
  daysInMonth = () => {
    return this.state.dateContext.daysInMonth();
  };
  currentDate = () => {
    return this.state.dateContext.get("date");
  };
  currentDay = () => {
    return this.state.dateContext.format("D");
  };

  firstDayOfMonth = () => {
    let dateContext = this.state.dateContext;
    let firstDay = moment(dateContext).startOf("month").format("d"); // Day of week 0...1..5...6
    return firstDay;
  };

  setMonth = (month) => {
    let monthNo = this.months.indexOf(month);
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).set("month", monthNo);
    this.setState({
      dateContext: dateContext,
    });
  };

  nextMonth = () => {
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).add(1, "month");
    this.setState({
      dateContext: dateContext,
    });
    this.props.onNextMonth && this.props.onNextMonth();
  };

  prevMonth = () => {
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).subtract(1, "month");
    this.setState({
      dateContext: dateContext,
    });
    this.props.onPrevMonth && this.props.onPrevMonth();
  };

  onSelectChange = (e, data) => {
    this.setMonth(data);
    this.props.onMonthChange && this.props.onMonthChange();
  };
  SelectList = (props) => {
    let popup = props.data.map((data) => {
      return (
        <div key={data}>
          <a
            href="#"
            onClick={(e) => {
              this.onSelectChange(e, data);
            }}
          >
            {data}
          </a>
        </div>
      );
    });

    return <div className="month-popup">{popup}</div>;
  };

  onChangeMonth = (e, month) => {
    this.setState({
      showMonthPopup: !this.state.showMonthPopup,
    });
  };

  getMonthFromString = (mon) => {
    var d = Date.parse(mon + "1, 2012");
    if (!isNaN(d)) {
      let month = (new Date(d).getMonth() + 1).toString();
      return month.length == 2 ? month : "0" + month;
    }
    return -1;
  };

  MonthNav = () => {
    return (
      <span
        className="label-month"
        onClick={(e) => {
          this.onChangeMonth(e, this.month());
        }}
      >
        {this.month()}
        {this.state.showMonthPopup && <this.SelectList data={this.months} />}
      </span>
    );
  };

  showYearEditor = () => {
    this.setState({
      showYearNav: true,
    });
  };

  setYear = (year) => {
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).set("year", year);
    this.setState({
      dateContext: dateContext,
    });
  };
  onYearChange = (e) => {
    this.setYear(e.target.value);
    this.props.onYearChange && this.props.onYearChange(e, e.target.value);
  };

  onKeyUpYear = (e) => {
    if (e.which === 13 || e.which === 27) {
      this.setYear(e.target.value);
      this.setState({
        showYearNav: false,
      });
    }
  };

  YearNav = () => {
    return this.state.showYearNav ? (
      <input
        defaultValue={this.year()}
        className="editor-year"
        ref={(yearInput) => {
          this.yearInput = yearInput;
        }}
        onKeyUp={(e) => this.onKeyUpYear(e)}
        onChange={(e) => this.onYearChange(e)}
        type="number"
        placeholder="year"
      />
    ) : (
      <span
        className="label-year"
        onDoubleClick={(e) => {
          this.showYearEditor();
        }}
      >
        {this.year()}
      </span>
    );
  };

  onDayClick = (e, day) => {
    this.props.setSelectedDay(e.target.children[0].id);
    this.setState({
      selectedDay: e.target.children[0].id,
    });

    this.props.onDayClick && this.props.onDayClick(e, day);
  };

  calculateSpots = () => {
    let month = this.getMonthFromString(this.month());
    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      let className = "day";
      // (i == this.currentDay() ? "day current-day": "day");
      let selectedClass = i == this.state.selectedDay ? " selected-day " : "";
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

    let daysInMonth = [];
    for (let d = 1; d <= this.daysInMonth(); d++) {
      let day = d < 10 ? "0" + d.toString() : d;
      let currentDate = `${this.year()}${month}${day}`;
      let dayMeal = {};
      this.props.meals.forEach(({ date, meal }) => {
        if (currentDate == date) {
          dayMeal = meal;
        }
      });
      let className = d == this.currentDay() ? "day current-day" : "day";
      let selectedClass =
        ~~currentDate == this.state.selectedDay ? " selected-day " : "";
      daysInMonth.push(
        <td
          key={~~currentDate}
          className={className + selectedClass}
          onClick={(e) => {
            this.onDayClick(e, d);
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

    var totalSlots = [...blanks, ...daysInMonth];
    let spaces = 42 - totalSlots.length;
    let endBlanks = [];
    for (let i = 1; i <= spaces; i++) {
      let className = "day";
      // (i == this.currentDay() ? "day current-day": "day");
      let selectedClass = i == this.state.selectedDay ? " selected-day " : "";
      endBlanks.push(
        <td key={i} className={className + selectedClass}>
          <span
            className="blank"
            onClick={(e) => {
              this.onDayClick(e, i);
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
      return <tr key={i * 100}>{d}</tr>;
    });
  };

  filterMeals = () => {
    console.log(`meals ${this.props.meals}`);
    let starting = `${this.year()}${this.getMonthFromString(this.month())}`;
    let filterMeals = this.state.meals.filter(({ date }) =>
      date.startsWith(starting)
    );
    this.setState(
      {
        filterMeals: filterMeals,
      },
      () => console.log(this.state)
    );
  };

  render() {
    let days = this.calculateSpots();
    let weekdays = this.weekdaysShort.map((day) => {
      return (
        <td key={day} className="week-day">
          {day}
        </td>
      );
    });

    return (
      <div className="calendar-container" style={this.style}>
        <table className="calendar">
          <thead>
            <tr className="calendar-header">
              <td colSpan="5">
                <this.MonthNav /> <this.YearNav />
              </td>
              <td colSpan="2" className="nav-month">
                <i
                  className="prev fa fa-fw fa-solid fa-chevron-left"
                  onClick={(e) => {
                    this.prevMonth();
                  }}
                ></i>
                <i
                  className="prev fa fa-fw fa-chevron-right"
                  onClick={(e) => {
                    this.nextMonth();
                  }}
                ></i>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>{weekdays}</tr>
            {days}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calendar;
