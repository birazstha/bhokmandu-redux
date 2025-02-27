import { useSelector } from "react-redux";

export default function Profile() {
  // const { profile } = useContext(ProfileContext);
  const profile = useSelector((state) => state.auth.profile);

  return (
    <>
      {profile && (
        <div className="flex flex-col gap-4">
          <div>
            <label className="font-bold text-primary">Name</label>
            <p>{profile.name}</p>
          </div>

          <div>
            <label className="font-bold text-primary">Email</label>
            <p>{profile.email}</p>
          </div>

          <div>
            <label className="font-bold text-primary">Profile Picture</label>
            <img
              src={profile.profile_picture}
              alt="Profile"
              className="rounded-full"
            />
          </div>
        </div>
      )}
    </>
  );
}
