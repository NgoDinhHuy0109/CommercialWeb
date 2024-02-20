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
            <CFormLabel htmlFor="inputPassword3" className="col-sm-2 col-form-label">
              Password
            </CFormLabel>
            <CCol sm={10}>
              <CFormInput type="password" id="inputPassword3" />
            </CCol>
          </CRow>
          <fieldset className="row mb-3">
            <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
            <CCol sm={10}>
              <CFormCheck
                type="radio"
                name="gridRadios"
                id="gridRadios1"
                value="option1"
                label="First radio"
                defaultChecked
              />
              <CFormCheck
                type="radio"
                name="gridRadios"
                id="gridRadios2"
                value="option2"
                label="Second radio"
              />
              <CFormCheck
                type="radio"
                name="gridRadios"
                id="gridRadios3"
                value="option3"
                label="Third disabled radio"
                disabled
              />
            </CCol>
          </fieldset>
          <CRow className="mb-3">
            <div className="col-sm-10 offset-sm-2">
              <CFormCheck type="checkbox" id="gridCheck1" label="Example checkbox" />
            </div>
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
