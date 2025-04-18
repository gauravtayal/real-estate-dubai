import React from "react";
import { useRouter } from "next/router";
import Loading from "../../components/shared/Loading";
import Error from "../../components/shared/Error";
import SingleProperty from "../../components/SingleProperty/SingleProperty";
import { useGetPropertyByIdQuery } from "../../redux/featuers/properties/propertiesApi";
type PropertyProps = {};

const Property: React.FC<PropertyProps> = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { data: property, isError, isLoading } = useGetPropertyByIdQuery(slug);

  let content = null;

  if (isLoading) return <Loading />;

  if (!isLoading && isError) {
    content = <Error message="Something went wrong" />;
  }

  if (!isLoading && !isError && property.length === 0) {
    content = <Error message="No data found" />;
  }

  if (!isLoading && !isError && property.length > 0) {
  }

  return (
    <div>
      <SingleProperty property={property.data} />
    </div>
  );
};
export default Property;
