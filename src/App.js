import { Button, Card, Col, Descriptions, PageHeader, Row, Space, Spin, Table } from "antd";
import Meta from "antd/lib/card/Meta";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "./store/actions/countryAction";

function App() {
  const dispatch = useDispatch()


  const countries = useSelector((state) => state.country)


  useEffect(() => {
    dispatch(getCountries());

  }, [])

  setTimeout(() => { console.log(countries) }, 2000)

  if (countries.countries.length == 0) return (
    <div style={{ display: "flex", height: "300px", alignItems: "center", justifyContent: "center" }}>
      <Space size="middle">
        <Spin size="large" />
        <h2>Yükleniyor...</h2>
      </Space>
    </div>
  )
  return (
    <div>
      <div className="site-page-header-ghost-wrapper">
        <PageHeader
          ghost={false}
          onBack={() => window.history.back()}
          title="Redux Thunk"
          subTitle="Helloooooo!"
          extra={[
            <Button key="3">Button 1</Button>,
            <Button key="2">Button 2</Button>,
            <Button key="1" type="primary">
              Button 3
            </Button>,
          ]}
        >
        </PageHeader>
      </div>

      <div className="site-card-wrapper ">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} >
          {
            countries.countries.map((country) => (
              <Col className="gutter-row" span={6}>
                <Card
                  hoverable
                  style={{ width: 300, margin: 12 }}
                  cover={<img alt="example" src={country.flags.png} />}
                >
                  <Meta title={country.name.official} description={"BÖLGE: " + country.region + " - NÜFUS: " + country.population} />
                </Card>
              </Col>
            ))
          }
        </Row>
      </div>

    </div>
  );
}

export default App;
