// ReusableTabs.tsx
import React from 'react';
import { Tabs, Tab, Box, Stack } from '@mui/material';

interface TabItem {
    label: string;
    content: React.ReactNode;
}

interface ReusableTabsProps {
    tabs: TabItem[];
    defaultTab?: number;
    orientation?: 'horizontal' | 'vertical';
    sx?: object;
}

export const CustomTab: React.FC<ReusableTabsProps> = ({
    tabs,
    defaultTab = 0,
    orientation = 'horizontal',
    sx = {},
}) => {
    const [currentTab, setCurrentTab] = React.useState(defaultTab);

    const handleChange = (_: React.SyntheticEvent, newValue: number) => {
        setCurrentTab(newValue);
    };

    return (
        <Box sx={{ width: '100%', ...sx }}>
            <Stack alignItems={'center'} display={'flex'} justifyContent={'center'}>
                <Tabs
                    value={currentTab}
                    onChange={handleChange}
                    orientation={orientation}
                    variant="scrollable"
                    scrollButtons="auto"
                    sx={{
                        '& .MuiTabs-indicator': {
                            backgroundColor: 'white',
                        },
                    }}
                >
                    {tabs.map((tab, index) => {

                        return (
                            <Tab
                                key={index}
                                label={tab.label}
                                sx={{
                                    color: 'white',
                                    '&.Mui-selected': {
                                        color: 'white',
                                    },
                                }}
                            />
                        );
                    })}
                </Tabs>
            </Stack>

            <Box>
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        role="tabpanel"
                        hidden={currentTab !== index}
                    >
                        {currentTab === index && <Box sx={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{tab.content}</Box>}
                    </div>
                ))}
            </Box>
        </Box>
    );
};
