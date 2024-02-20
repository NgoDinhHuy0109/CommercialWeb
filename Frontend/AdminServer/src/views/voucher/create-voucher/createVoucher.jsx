import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCardHeader,
  CCol,
  CFormInput,
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
        <CRow>
          <CCol xs={12} sm={6} lg={4}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="VoucherNameInput">Voucher Name</CInputGroupText>
              <CFormInput aria-label="VoucherNameInput" placeholder="voucher name"></CFormInput>
            </CInputGroup>
          </CCol>

          <CCol xs={12} sm={6} lg={4}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="VoucherNameInput">Value</CInputGroupText>
              <CFormInput aria-label="VoucherNameInput" placeholder="voucher name"></CFormInput>
            </CInputGroup>
          </CCol>

          <CCol xs={12} sm={6} lg={4}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="VoucherTypeSelect">Product Type</CInputGroupText>
              <CFormSelect aria-label="VoucherTypeSelect">
                <option value="0">All</option>
                <option value="1">Fresh Produce</option>
                <option value="2">Electronics</option>
                <option value="3">Toys</option>
                <option value="4">Furniture</option>
              </CFormSelect>
            </CInputGroup>
          </CCol>

          <CCol xs={12} sm={6} lg={4}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="ForShopInput">Applied Shop</CInputGroupText>
              <CFormInput aria-label="ForShopInput" placeholder="shop name"></CFormInput>
            </CInputGroup>
          </CCol>

          <CCol xs={12} sm={6} lg={4}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="CreatedDateInput">Created Date</CInputGroupText>
              <CFormInput aria-label="CreatedDateInput" placeholder="dd/mm/yyyy"></CFormInput>
            </CInputGroup>
          </CCol>

          <CCol xs={12} sm={6} lg={4}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="ExpireDateInput">Expire Date</CInputGroupText>
              <CFormInput aria-label="ExpireDateInput" placeholder="dd/mm/yyyy"></CFormInput>
            </CInputGroup>
          </CCol>

          <CCol xs={12} sm={6} lg={4}>
            <CInputGroup className="mb-3">
              <CInputGroupText id="VoucherStatusSelect">Voucher Status</CInputGroupText>
              <CFormSelect aria-label="VoucherStatusSelect">
                <option value="0">Valid</option>
                <option value="1">Expired</option>
                <option value="2">Deleted</option>
              </CFormSelect>
            </CInputGroup>
          </CCol>
        </CRow>
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
