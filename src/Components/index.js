import ErrorBoundary from "./errorBoundary"
import { TextPrimary, TextSecondary, TextNormal, TextSocial, TextCategory, TextError } from './text'
import PublicRoute from './route/publicRoute'
import PrivateRoute from './route/privateRoute'
import CustomRoute from './route/customRoute'
import StrictRoute from './route/strictRoute'
import BoxError from "./box-error"
import BoxEdit from "./box-edit"
import Image from './image'
import Header from './header'
import { LinkIcon, LinkNormal } from './link'
import Container from './container'
import Footer from './footer'
import Toast from './toast'
import Checkbox from './checkbox'
import CheckboxGroup from './checkbox_group'
import { ButtonImage } from './button'
import CardSearch from './cardSearch'
import CardDetail from './cardDetail'
export * from './form'

export {
    ErrorBoundary,
    BoxEdit,
    // text
    TextPrimary,
    TextCategory,
    TextSecondary,
    TextNormal,
    TextSocial,
    TextError,
    // Route
    PublicRoute,
    PrivateRoute,
    CustomRoute,
    StrictRoute,
    BoxError,
    Image,
    Header,
    //link
    LinkIcon,
    LinkNormal,
    Container,
    Footer,
    Toast,

    // Checkbox
    Checkbox,
    CheckboxGroup,

    // Button
    ButtonImage,

    // card item
    CardSearch,
    CardDetail
}