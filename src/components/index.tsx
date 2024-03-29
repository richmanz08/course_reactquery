import React from 'react';
import {
    StarOutlined,
    FolderOutlined, ReloadOutlined,
    ApiOutlined, StopOutlined,
    OrderedListOutlined, HourglassOutlined
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Route, Routes, useLocation } from 'react-router-dom';
import UseQueryPractice from './practice/usequery';
import PaginationPractice from './practice/pagination';
import CachePractice from './practice/cache';
import MutationsPractice from './practice/mutations';
import InvalidatePractice from './practice/invalidate';
import CancelledApiPractice from './practice/cancelled-api';
import HandlePractice from './practice/handle-api';
import InfiniteQuelyPractice from './practice/infinite-scroll';
import { useNavigate } from 'react-router-dom';
import InvalidateVsRefetchPractice from './practice/invalidateVsrefetch';

const { Header, Content, Footer, Sider } = Layout;
export const HomePage = () => {
    const location = useLocation()


    const navigate = useNavigate()
    const {
        token: { colorBgContainer },
    } = theme.useToken();



    const menuItems = [{
        key: '1',
        icon: StarOutlined,
        label: 'useQuery',
        path: '/usequery'
    }, {
        key: '2',
        icon: StarOutlined,
        label: 'useMutation',
        path: '/mutation'
    }, {
        key: '3',
        icon: FolderOutlined,
        label: 'Caching Data',
        path: '/cache'
        },
        {
        key: '4',
        icon: ReloadOutlined,
            label: 'Invalidate',
            path: '/invalidate'
        }, {
            key: '5',
            icon: ReloadOutlined,
            label: 'Invalidate VS Refetch',
            path: '/invalidate-vs-refetch'
        }, {
            key: '6',
        icon: ApiOutlined,
        label: 'Handle API',
        path: '/handle/1'
    }, {
            key: '7',
        icon: StopOutlined,
        label: 'EX: Cancelled API',
        path: '/cancelled'
    }, {
            key: '8',
        icon: OrderedListOutlined,
        label: 'EX: Pagination Query',
        path: '/pagination'
    }, {
            key: '9',
        icon: HourglassOutlined,
        label: 'EX: Infinite Scroll',
        path: '/infinite-scroll'
    }]
    const tab = menuItems.find((menu) => menu.path.includes(location.pathname))

    return <Layout>
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            width={250}

        >
            <div className="logo" />
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={[tab?.key || '1']}
                items={menuItems.map((item) => ({
                    key: item.key,
                    icon: React.createElement(item.icon),
                    label: item.label,

                }))}
                onClick={(e) => {
                    const nextPage = menuItems.find((f) => f.key === e.key)
                    navigate(`${nextPage?.path}`)
                }


                }
            />
        </Sider>
        <Layout>
            <Header style={{ padding: 0, background: colorBgContainer, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                <span className='title-course'> <img style={{ width: 40, height: 40, marginRight: 16 }} src='https://react-query-v3.tanstack.com/_next/static/images/emblem-light-628080660fddb35787ff6c77e97ca43e.svg' alt='n' />React Query Course</span>
                <span className='title-label-header'>| {tab?.label}</span>
            </Header>
            <Content style={{ margin: '24px 16px 0' }}>
                <div style={{ padding: 24, minHeight: 360 }}>
                    <Routes>
                        <Route path="/" element={<UseQueryPractice />} />
                        <Route path="/usequery" element={<UseQueryPractice />} />
                        <Route path="/pagination" element={<PaginationPractice />} />
                        <Route path="/cache" element={<CachePractice />} />
                        <Route path="/mutation" element={<MutationsPractice />} />
                        <Route path="/invalidate" element={<InvalidatePractice />} />
                        <Route path='/invalidate-vs-refetch' element={<InvalidateVsRefetchPractice />} />
                        <Route path="/cancelled" element={<CancelledApiPractice />} />
                        <Route path="/handle/:id" element={<HandlePractice />} />
                        <Route path="/infinite-scroll" element={<InfiniteQuelyPractice />} />
                    </Routes>
                </div>

            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
    </Layout>
}