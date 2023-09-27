import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { useState, useEffect } from 'react';
import { getStoredCardId } from '../../util/LocalStorage';

const Stats = () => {

    const [values, setValue] = useState();
    useEffect(() => {
        setValue(getStoredCardId())
    }, [])

    const totalPercentage = 100 * (values?.length)/ 12;
    const remainingPercentage = 100 - totalPercentage;

    const data = [
        { value: totalPercentage.toFixed(1), label: 'Your Donation' },
        { value: remainingPercentage.toFixed(1), label: 'Total Donation' }
    ];

    const size = {
        width: 900,
        height: 450,
    };

    return (
        <div className='flex w-full h-screen items-center px-10'>
            <PieChart
                series={[
                    {
                        arcLabel: (item) => `${item.label} (${item.value})`,
                        arcLabelMinAngle: 45,
                        data,
                    },
                ]}
                sx={{
                    [`& .${pieArcLabelClasses.root}`]: {
                        fill: 'white',
                        fontWeight: 'bold',
                    },
                }}
                {...size}
            />
        </div>
    );
};

export default Stats;