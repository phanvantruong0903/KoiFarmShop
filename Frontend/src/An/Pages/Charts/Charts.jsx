import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Row, Container, DropdownButton, Dropdown } from 'react-bootstrap';
import useChartData from '../../Hooks/useChartData';
import Spinner from '../../Components/Spinner';
import GeneralChart from './GeneralChart';
import ProfileChart from './ProfileChart';
import OrderChart from './OrderChart';
import RevunueChart from './RevunueChart';
import  'chart.js/auto';
export default function Chart() {
  const { chartType } = useParams();
  const {
    profileChartData,
    orderData,
    combineData,
    filterProfileData,
    filterOrderData,
    filterCombinedData,
    filterRevuenueData,
    RevenuedataSet,
    RevuenueData
  } = useChartData();
  
  const [isLoading, setIsLoading] = useState(false);
  const [filteredProfileData, setFilteredProfileData] = useState(profileChartData);
  const [filteredOrderData, setFilteredOrderData] = useState(orderData); 
  const [filteredCombinedData, setFilteredCombinedData] = useState(combineData()); 
  const [selectedFilter, setSelectedFilter] = useState('all'); 
const [filterRevuenueDataR, setFilterRevuenueDataR] = useState(RevuenueData);

  useEffect(() => {
    setIsLoading(profileChartData.labels.length === 0 || orderData.labels.length === 0);
    setFilterRevuenueDataR(RevuenueData);
    setFilteredProfileData(profileChartData);
    setFilteredOrderData(orderData);
    setFilteredCombinedData(combineData());
  }, [profileChartData, orderData,RevuenueData]);
  

  const handleFilterChange = (filter) => {
    const newProfileData = filterProfileData(filter);
    const newOrderData = filterOrderData(filter);
    const newCombinedData = filterCombinedData(filter);
    const newRevuenueData = filterRevuenueData(filter);
    setFilterRevuenueDataR(newRevuenueData);
    setFilteredProfileData(newProfileData);
    setFilteredOrderData(newOrderData);
    setFilteredCombinedData(newCombinedData);
    setSelectedFilter(filter);
  };

  return (
    <Container fluid>
      <h1 className="text-center">REPORT</h1>
      {isLoading ? (
        <Spinner />
      ) : (
        <>

          <Row className="my-3 justify-content-center">
            <DropdownButton id="filter-dropdown" title="Filter By">
              <Dropdown.Item onClick={() => handleFilterChange('7days')}>Last 7 Days</Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilterChange('month')}>This Month</Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilterChange('year')}>This Year</Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilterChange('all')}>All Time</Dropdown.Item>
            </DropdownButton>
          </Row>


          <Row style={{ height: '50vh', width: '100%' }}>
            <Col md={6}>
              <ProfileChart profileData={filteredProfileData} types={chartType} />
            </Col>
            <Col md={6}>
              <OrderChart orderData={filteredOrderData} types={chartType} />
            </Col>
          </Row>


          <Row>
            <Col md={6}>
              {filteredProfileData.labels.length > 0 && filteredOrderData.labels.length > 0 && (
                <GeneralChart
                  data={filteredCombinedData} 
                  chartType={chartType}
                  title="Count"
                />
              )}
            </Col>
            <Col md={6}>
              <RevunueChart types={chartType} chartDATA={filterRevuenueDataR} DATA={RevenuedataSet} />
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}
