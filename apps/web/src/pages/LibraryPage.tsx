import Hero from "../components/library/Hero";
import LibraryFilters from "../components/library/LibraryFilters";
import LibraryGrid from "../components/library/LibraryGrid";
import LibraryPreviewDrawer from "../components/library/LibraryPreviewDrawer";
import LibraryToolbar from "../components/library/LibraryToolbar";

export default function LibraryPage() {
    return (
        <>
            <div className="space-y-10">

                {/* Hero */}
                <Hero />

                {/* Command Center */}
                <LibraryToolbar />

                {/* Collections */}
                <LibraryFilters />

                {/* Archive */}
                <LibraryGrid />

                {/* Preview */}
                <LibraryPreviewDrawer />

            </div>
        </>
    );
}