import ErrorBoundary from "./errorBoundary"
import { TextPrimary, TextSecondary, TextNormal, TextSocial, TextCategory, TextError } from './text'
import PublicRoute from './route/publicRoute'
import PrivateRoute from './route/privateRoute'
import CustomRoute from './route/customRoute'
import BoxError from "./box-error"
import BoxEdit from "./box-edit"
import Image from './image'
import Header from './header'
import { LinkIcon, LinkNormal } from './link'
import Container from './container'
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
    BoxError,
    Image,
    Header,
    //link
    LinkIcon,
    LinkNormal,
    Container
}