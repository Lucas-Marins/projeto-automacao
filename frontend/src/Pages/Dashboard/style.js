import styled from "styled-components";

export const Container = styled.div` 
display: flex;
justify-content: center;

width: 100%;
height: 100vh;
overflow-x: hidden;


.layout-content{
    
    margin-top: 2rem;
    width: 80% !important;
    
h1 {
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  margin-top: 4px;
  }
}

.ant-card.criclebox {
    box-shadow: 0px 20px 27px #0000000d;
    border-radius: 12px;
  }

/* .ant-card.criclebox .project-ant {
  padding-left: 24px;
  padding-right: 24px;
} */

/* .ant-card.criclebox table th {
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 14px;
  padding-bottom: 14px;
} */

.icon-box {
  width: 48px;
  height: 48px;
  text-align: center;
  background: #1890ff;
  color: #fff;
  border-radius: 0.5rem;
  margin-left: auto;
  line-height: 55px;
}

.icon-box span {
  color: #fff;
  font-size: 24px;
}

.bar-chart {
  background: transparent
    linear-gradient(62deg, #00369e 0%, #005cfd 53%, #a18dff 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: 0px 4px 6px #0000001f;

  border-radius: 8px;
}

.h-full {
  height: 100%;
}

.mb-24 {
  margin-bottom: 24px;
}

.number span {
  font-weight: 600;
  color: #8c8c8c;
  font-size: 14px;
}
.number h3 {
  font-weight: 700;
  margin-bottom: 0px;
  font-size: 30px;
}

.number h3 small {
  font-weight: 600;
  font-size: 14px;
}

.bar-chart line.apexcharts-xaxis-tick {
  stroke: transparent;
}

.chart-vistior {
  margin-top: 30px;
}

.chart-vistior h5 {
  margin: 0px;
  font-weight: 700;
}

.chart-visitor-count h4 {
  margin: 0px;
  font-weight: 700;
}

.chart-visitor-count span {
  color: rgba(0, 0, 0, 0.65);
  font-weight: 600;
}

.linechart h5 {
  font-weight: 700;
  margin: 0px;
}
.linechart {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.full-width {
    max-width: 100% !important;
}

.full-width path {
  fill: transparent;
}

  .sales ul {
  margin: 0px;
  padding: 0px;
  list-style: none;
}

.sales ul li:first-child span.anticon {
  color: #b37feb;
}

.sales ul li:last-child span.anticon {
  color: #1890ff;
}
.sales ul li {
  color: #8c8c8c;
  margin-bottom: 3px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
}

.ant-typography.lastweek {
  color: #8c8c8c;
  font-weight: 600;
}


`