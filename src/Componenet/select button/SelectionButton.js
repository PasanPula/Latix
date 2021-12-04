import "../select button/SelectionButton.css";

export default function SelectionButton({valueList,pickedValue,setPickvalue}) {


  const handleRadios = (e) => {
    setPickvalue(e.target.value==="X"?"*":e.target.value);
  }


  const options = valueList.map((loan, key) => {
            const isCurrent = pickedValue === loan
            return (
              <div
                key={key}
                className="radioPad"
              >
                  <label
                    className={
                      isCurrent ?
                        'radioPad__wrapper radioPad__wrapper--selected' :
                        'radioPad__wrapper'
                      }
                  >
                    <input
                      className="radioPad__radio"
                      type="radio"
                      name="coffeeTypes"
                      id={loan}
                      value={loan}
                      onChange={handleRadios}
                    />
                    {loan==="*"?"X":loan}
                  </label>
              </div>
            )
          })
         

  return(<div >
         {options}
      </div>);
}


