import React, {useState} from "react";
import { DateRange } from "react-date-range";

function Calendi({datesarray}) {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
      <div>

          {datesarray.length === 0 ? (
              <div>loading...</div>
          ) : (
              <div className="flex mb-6 mt-2 justify-center">
              <div className=" flex overflow-hidden w-[700px] mb-2 h-[325px] justify-center">
                <DateRange
                  style={{ width: "100vw", height: "100%", maxWidth: "400px" }}
                  ranges={[selectionRange]}
                  // disabledDates={[new Date(ree)]}
                  minDate={new Date()}
                  onChange={handleSelect}
                  rangeColors={["#03cffc"]}
                  disabledDates={datesarray.map((e) => new Date(e))}
                />
              </div>
            </div>
          )}
      </div>
  
  )
}

export default Calendi;
