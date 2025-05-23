import { BrowserRouter, Routes, Route } from "react-router";
import RouteTemplate from "./RouteTemplate";
import RouterPaths from "./RouterPaths";
import { HomePage } from "@/features/home/loadable";
import { DesignPatternsPage } from "@/features/designPatterns/loadable";
import { CreationalPage } from "@/features/designPatterns/features/creational/loadable";
import { StructuralPage } from "@/features/designPatterns/features/structural/loadable";
import { BehavioralPage } from "@/features/designPatterns/features/behavioral/loadable";
import { FactoryMethodPage } from "@/features/designPatterns/features/creational/features/factoryMethod/loadable";
import { AbstractFactoryPage } from "@/features/designPatterns/features/creational/features/abstractFactory/loadable";
import { BuilderPage } from "@/features/designPatterns/features/creational/features/builder/loadable";
import { PrototypePage } from "@/features/designPatterns/features/creational/features/prototype/loadable";
import { SingletonPage } from "@/features/designPatterns/features/creational/features/singleton/loadable";
import { AdapterPage } from "@/features/designPatterns/features/structural/features/adapter/loadable";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<RouteTemplate />}>
                    <Route path={RouterPaths.HOME} element={<HomePage />} />
                    <Route path={RouterPaths.DESIGN_PATTERNS} element={<DesignPatternsPage />} />
                    <Route path={RouterPaths.DESIGN_PATTERNS_CREATIONAL} element={<CreationalPage />} />
                    <Route path={RouterPaths.DESIGN_PATTERNS_CREATIONAL_FACTORY_METHOD} element={<FactoryMethodPage />} />
                    <Route path={RouterPaths.DESIGN_PATTERNS_CREATIONAL_ABSTRACT_FACTORY} element={<AbstractFactoryPage />} />
                    <Route path={RouterPaths.DESIGN_PATTERNS_CREATIONAL_BUILDER} element={<BuilderPage />} />
                    <Route path={RouterPaths.DESIGN_PATTERNS_CREATIONAL_PROTOTYPE} element={<PrototypePage />} />
                    <Route path={RouterPaths.DESIGN_PATTERNS_CREATIONAL_SINGLETON} element={<SingletonPage />} />
                    <Route path={RouterPaths.DESIGN_PATTERNS_STRUCTURAL} element={<StructuralPage />} />
                    <Route path={RouterPaths.DESIGN_PATTERNS_STRUCTURAL_ADAPTER} element={<AdapterPage />} />
                    <Route path={RouterPaths.DESIGN_PATTERNS_BEHAVIORAL} element={<BehavioralPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
