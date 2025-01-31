import React from 'react'
import dayjs from 'dayjs';
import Scores from './OtherComponents/Scores';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Linechart from './Charts/Linechart';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import MapComponent from './MapComponents/MapComponent';
import YojanaTable from './OtherComponents/YojanaTable';
import BarChartComponent from './Charts/BarChartComponent';
import { useState } from 'react';

import 'react-dates/initialize'; // This is required to initialize the library
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'; 

function DashBoardHome() {
    const [rangeDate, setRangeDate] = useState([
        dayjs('2022-04-17'),
        dayjs('2022-04-21'),
    ]);
    const wards = ["Ward1", "Ward2", "Ward3", "Ward4", "Ward5", "Ward6", "Ward7", "Ward8", "Ward9"];
    const wardValue = [9, 5, 4, 3, 5, 6, 3, 4, 5];
    const cityParams = ["Garbage", "Potholes", "Road Quality"
        , "Air Quality", "Public Toilet"
        , "Parking",
        "Traffic Congestion"];
    const cityParamsValue = [9, 5, 4, 3, 5, 6, 3];

    const [overallScore,setOverAllScore] = useState(8);
    const [nationalScore,setNationalScore] = useState(8);
    const [sustainabilityScore,setSustainabilityScore] = useState(8);
    const [touristScore,setTouristScore] = useState(8);

    const [dateRange, setDateRange] = useState({
        startDate: null,
        endDate: null,
      });
      const [focusedInput, setFocusedInput] = useState(null);
    
      const handleDateChange = ({ startDate, endDate }) => {
        setDateRange({ startDate, endDate });
      };

    return (
        <div className='space-y-4'>
            <div className='flex justify-between items-center'>
                <div className='flex-start'>
                    <h1 className='text-4xl font-bold text-gray-800'>Lucknow</h1>
                    <p className='text-gray-500 text-xl'>Dashboard <KeyboardArrowRightIcon color='primary' /> </p>
                </div>
                <div className='flex-end'>
                <DateRangePicker
                    startDate={dateRange.startDate}
                    startDateId="your_unique_start_date_id"
                    endDate={dateRange.endDate}
                    endDateId="your_unique_end_date_id"
                    onDatesChange={handleDateChange}
                    focusedInput={focusedInput}
                    onFocusChange={focusedInput => setFocusedInput(focusedInput)}
                />
                </div>
            </div>
            <Scores
                mainScoreName="Overall Score"
                mainScoreValue={overallScore}
                scores={
                    [
                        { scoreName: "National Average", scoreValue: nationalScore, scoreColor: "red" },
                        { scoreName: "Tourism Score", scoreValue: touristScore, scoreColor: "purple" },
                        { scoreName: "Sustainability Score", scoreValue: sustainabilityScore, scoreColor: "blue" }
                    ]
                }
            />
            <div className='flex items-center justify-between'>
                <Linechart />
                <div className='space-y-4'>
                    <Alert severity="error" className='rounded-lg p-2 w-[20vw] border-1 border-gray-800'>
                        <AlertTitle><h1>Critical Alert</h1></AlertTitle>
                        <p>Eg: Dangerous Pitholes,Open Drain or manholes,Big Garbage Dump.
                            Location,Date</p>
                        <p><u>Learn More</u></p>
                    </Alert>
                    <Alert severity="warning" className='rounded-lg p-2 w-[20vw] border-1 border-gray-800'>
                        <AlertTitle>Attention Required</AlertTitle>
                        <p>
                            Eg: Street light,overflowing drain,severe traffic congestion,
                            health,hazard.
                            Location,Date.
                        </p>
                        <u>Learn More</u>
                    </Alert>
                </div>
            </div>
            <MapComponent />
            <div className='flex items-center 
                justify-between mb-2 
                rounded-lg'>
                <div className='shadow-md p-2 rounded-lg bg-cyan-50'>
                    <h1 className='text-2xl'>City Parameters</h1>
                    <BarChartComponent width={575} XLabels={cityParams} values={cityParamsValue} />
                </div>
                <div className='shadow-md p-2 rounded-lg bg-yellow-50'>
                    <h1 className='text-2xl'>Ward/Area Score</h1>
                    <BarChartComponent width={500} XLabels={wards} values={wardValue} />
                </div>
            </div>
            <div className='w-full p-4 shadow-md rounded-lg mb-2'>
                <h1 className='text-4xl'>Progress of Intiatives</h1>
                <YojanaTable />
            </div>
        </div>
    )
}

export default DashBoardHome