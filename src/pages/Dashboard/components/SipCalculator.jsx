import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import{
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';

import { Doughnut } from "react-chartjs-2";
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);



const SipCalculator = () => {

    const data={
        labels: ['Invested amount','Estd. returns'],
        datasets:[{
                label:'Poll',
                data:[3,6],
                backgroundcolor:['blue','white'],
                bordercolor:['blue','white'],

        }]
    }
    const options={

    }
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <h1 className="text-3xl font-semibold text-[#7A7A7A] my-3">
        CALCULATE INVESTMENTS
      </h1>
      <div className="inline-block">
      <div className="shadow-gray-500 border-2 flex">
        <div>
        <div className="flex m-5">
          <Button variant="text" className="">Sip</Button>
          <Button variant="text">Lumpsum</Button>
        </div>
        <div>
            <div className="px-10 py-5">
          <div className="flex items-center justify-between w-[500px] ">
            <h1 className="">Monthly Investment</h1>
            <div>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "10ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label=""
                  variant="outlined"
                />
              </Box>
            </div>
            </div>
            <Slider aria-label="Volume" value={value} onChange={handleChange} />
          </div>
          <div className="px-10 py-5">
          <div className="flex items-center justify-between  ">
            <h1 className="">Expected return rate(p.a)</h1>
            <div>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "10ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label=""
                  variant="outlined"
                />
              </Box>
              </div>
            </div>
            <Slider aria-label="Volume" value={value} onChange={handleChange} />
          </div>
          <div className="px-10 py-5">
          <div className="flex items-center justify-between ">
            <h1 className="">Time Period</h1>
            <div>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "10ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label=""
                  variant="outlined"
                />
              </Box>
            </div>
            </div>
            <Slider aria-label="Volume" value={value} onChange={handleChange} />
          </div>
        </div>
        <div>
            <div className="flex justify-between items-center px-10 py-2">
                <h1>Invested Amount</h1>
                <div>$23445431
              </div>
            </div>
            <div className="flex justify-between items-center px-10 py-2">
                <h1>Est. returns</h1>
                <div>$12321434
              </div>
            </div>
            <div className="flex justify-between items-center px-10 py-2">
                <h1>Total value</h1>
                <div>$34554766
              </div>
            </div>
        </div>
      </div>
      <div className="flex items-center justify-center p-10">
          <Doughnut
          data={data}
          options={options}
          >
            </Doughnut>      
      </div>
      </div>
      </div>
    
    </div>
  );
};

export default SipCalculator;
