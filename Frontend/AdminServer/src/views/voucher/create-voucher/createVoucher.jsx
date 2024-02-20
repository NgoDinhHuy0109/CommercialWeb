import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CLink,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CWidgetStatsB,
  CWidgetStatsC,
  CWidgetStatsE,
  CWidgetStatsF,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cilArrowRight,
  cilBasket,
  cilBell,
  cilChartPie,
  cilMoon,
  cilLaptop,
  cilPeople,
  cilSettings,
  cilSpeech,
  cilSpeedometer,
  cilUser,
  cilUserFollow,
} from '@coreui/icons'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import { DocsExample } from 'src/components'
import { Link } from 'react-router-dom'
import './createVoucher.css'

const CreateVoucher = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  return (
    <CCard className="mb-4">
      <CCardHeader>
        <CRow className="d-flex flex-row align-items-center">
          <CCol xs={6} sm={6} lg={6} className="justify-content-center">
            <h3 className="mb-0">Create Vouchers</h3>
          </CCol>
          <CCol xs={6} sm={6} lg={6} className="text-end">
            <CButton color="info" href="/Vouchers">
              <Link to="/vouchers" style={{ textDecoration: 'none' }}>
                <h4 className="mb-0" style={{ color: 'white' }}>
                  Go back
                </h4>
              </Link>
            </CButton>
          </CCol>
        </CRow>
      </CCardHeader>
      <CCardBody>
        <CForm>
          <CRow className="mb-3">
            <CFormLabel htmlFor="voucherName" className="col-sm-2 col-form-label">
              Name
            </CFormLabel>
            <CCol sm={10}>
              <CFormInput type="text" id="voucherName" />
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel htmlFor="voucherValue" className="col-sm-2 col-form-label">
              Value
            </CFormLabel>
            <CCol sm={10}>
              <CFormInput
                type="number"
                id="voucherValue"
                min="1"
                max="999999999"
                onWheel={() => document.activeElement.blur()}
              />
            </CCol>
          </CRow>

          <CRow className="mb-3">
            <CCol xs={2}>
              <CFormLabel htmlFor="appliedVoucher">Applied Products</CFormLabel>
            </CCol>
            <CCol xs={10}>
              <CRow>
                <CCol xs={6} lg={4}>
                  <CFormCheck id="productType1" label="Books" />
                </CCol>
                <CCol xs={6} lg={4}>
                  <CFormCheck id="productType2" label="Electronics" />
                </CCol>
                <CCol xs={6} lg={4}>
                  <CFormCheck id="productType3" label="Vehicles" />
                </CCol>
                <CCol xs={6} lg={4}>
                  <CFormCheck id="productType4" label="Clothing" />
                </CCol>
                <CCol xs={6} lg={4}>
                  <CFormCheck id="productType5" label="Accessory" />
                </CCol>
                <CCol xs={6} lg={4}>
                  <CFormCheck id="productType6" label="Fresh Produce" />
                </CCol>
                <CCol xs={6} lg={4}>
                  <CFormCheck id="productType7" label="Laptop & Computers" />
                </CCol>
                <CCol xs={6} lg={4}>
                  <CFormCheck id="productType8" label="Toys" />
                </CCol>
                <CCol xs={6} lg={4}>
                  <CFormCheck id="productType9" label="Phone & Ipads" />
                </CCol>
              </CRow>
            </CCol>
          </CRow>

          <CRow className="mb-3">
            <CFormLabel htmlFor="voucherAppliedShops" className="col-sm-2 col-form-label">
              Applied Shops
            </CFormLabel>
            <CCol sm={10}>
              <CFormInput type="text" id="voucherAppliedShops" />
            </CCol>
          </CRow>
        </CForm>
        <CRow>
          <CCol xs={12} sm={12} lg={12} className="text-end">
            <CButton type="submit" className="mb-3">
              Submit
            </CButton>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  )
}

export default CreateVoucher
